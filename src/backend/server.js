import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bcrypt, { hash } from "bcrypt";
import pg from "pg";
import jwt from "jsonwebtoken";
const { Pool } = pg;

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.static("dist"));

const port = process.env.PORT;

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

async function checkUser(username, password) {
  try {
    const user = await pool.query("SELECT * FROM users WHERE username = $1", [
      username,
    ]);
    const match = await bcrypt.compare(password, user.rows[0].hashed_password);
    if (match) {
      const userObject = Object.fromEntries(Object.entries(user.rows[0]).filter(([key]) => key !== 'hashed_password'))
      return userObject
    } else {
      throw new Error("Passwords do not match");
    }
  } catch (err) {
    console.error(err);
    return null;
  }
}

// GET routes
app.get("/users", async (req, res) => {
  try {
    const users = await pool.query("SELECT * FROM users ORDER BY userId ASC");
    res.status(200).json(users.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("User request server error");
  }
});

app.get("/users/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const user = await pool.query("SELECT * FROM users WHERE userId = $1", [
      id,
    ]);
    if (user.rowCount === 0) {
      res.status(404).send("User not found");
    } else {
      res.status(200).json(user.rows[0]);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("User request server error");
  }
});

app.get("/books/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const books = await pool.query(
      "SELECT * FROM books WHERE userId = $1 ORDER BY bookId DESC",
      [id]
    );
    if (books.rowCount === 0) {
      res
        .status(404)
        .send("Specified user either doesn't exist or has no books to view");
    } else {
      res.status(200).json(books.rows);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Book request server error");
  }
});

// POST routes

app.post("/books", async (req, res) => {
  const { userId, title, author, description, genre, thumbnail, total_pages, pages_read } =
    req.body;
  try {
    const newBook = await pool.query(
      "INSERT INTO books (userId, title, author, description, genre, thumbnail, total_pages, pages_read) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
      [userId, title, author, description, genre, thumbnail, total_pages, pages_read]
    );
    if (newBook.rowCount === 0) {
      res
        .status(404)
        .send("Specified user either doesn't exist or has no books to view");
    } else {
      res.status(200).json(newBook.rows[0]);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Book creation server error");
  }
});

app.post("/register", async (req, res) => {
  console.log(req.body)
  const { username, password, email, first_name, last_name } = req.body;
  try {
    const comparison = await pool.query(
      "SELECT EXISTS (SELECT 1 FROM users WHERE username = $1 OR email = $2)",
      [username, email]
    );
    if (comparison.rows[0].exists === false) {
      const hashed_password = await bcrypt.hash(password, 10);
      const newUser = await pool.query(
        "INSERT INTO users (username, hashed_password, email, first_name, last_name, friends, friend_requests) VALUES ($1, $2, $3, $4, $5, ARRAY[]::integer[], ARRAY[]::integer[]) RETURNING *",
        [username, hashed_password, email, first_name, last_name]
      );
      res.status(201).json(newUser.rows[0]);
    } else {
      res.status(400).send(comparison.rows[0]);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("User registration error");
  }
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const result = await checkUser(username, password);
    if (result !== null) {
      const token = jwt.sign(
        { userid: result.userid },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "1h" }
      );
      res.cookie("token", token, { httpOnly: true });
      res.status(200).json(result);
    } else {
      res.status(400).send("Authentication issue");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Login error");
  }
});

// DELETE routes

app.delete("/users/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedUser = await pool.query(
      "DELETE FROM users WHERE userId = $1 RETURNING *",
      [id]
    );
    if (deletedUser.rowCount === 0) {
      res.status(404).send("User not found");
    } else {
      res.status(201).json(deletedUser.rows[0]);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("User deletion server error");
  }
});

app.delete("/books/:userId/:bookId", async (req, res) => {
  const { userId, bookId } = req.params;
  try {
    const deletedBook = await pool.query(
      "DELETE FROM books WHERE userId = $1 AND bookId = $2 RETURNING *",
      [userId, bookId]
    );
    if (deletedBook.rowCount === 0) {
      res.status(404).send("Book not found");
    } else {
      res.status(201).json(deletedBook.rows[0]);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Book deletion server error");
  }
});

// UPDATE routes
app.put("/users/:id", async (req, res) => {
  const { id } = req.params;
  const { username, hashed_password, email, first_name, last_name } = req.body;
  try {
    const revisedUser = await pool.query(
      "UPDATE users set username = $1, hashed_password = $2, email = $3, first_name = $4, last_name = $5 WHERE userId = $6 RETURNING *",
      [username, hashed_password, email, first_name, last_name, id]
    );
    if (revisedUser.rowCount === 0) {
      res.status(404).send("User not found");
    } else {
      res.status(201).json(revisedUser.rows[0]);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("User info update server error");
  }
});

app.put("/books/:userId/:bookId", async (req, res) => {
  const { userId, bookId } = req.params;
  const { title, author, description, genre, total_pages, pages_read } =
    req.body;
  try {
    const revisedBook = await pool.query(
      "UPDATE books set title = $1, author = $2, description = $3, genre = $4, total_pages = $5, pages_read = $6 WHERE userId = $7 AND bookId = $8 RETURNING *",
      [
        title,
        author,
        description,
        genre,
        total_pages,
        pages_read,
        userId,
        bookId,
      ]
    );
    if (revisedBook.rowCount === 0) {
      res.status(404).send("User not found");
    } else {
      res.status(201).json(revisedBook.rows[0]);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Book info update server error");
  }
});

app.listen(port, () => {
  console.log(`LitLobby up on ${port}`);
});
