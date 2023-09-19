import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import pg from 'pg'
const { Pool } = pg


const app = express()
dotenv.config()
app.use(cors())
app.use(express.json())

const port = process.env.PORT


const pool = new Pool (
    {connectionString: process.env.DATABASE_URL}
)



// GET requests
app.get('/users', async (req, res) => {
    try {
        const users = await pool.query('SELECT * FROM users ORDER BY userId ASC')
        res.status(200).json(users.rows)
    } catch (err) {
        console.error(err)
        res.status(500).send('User request server error')
    }
})


app.get('/users/:id', async (req, res) => {
    const { id } = req.params
    try {
        const user = await pool.query('SELECT * FROM users WHERE userId = $1', [id])
        if (user.rowCount === 0) {
            res.status(404).send('User not found')
        } else {
            res.status(200).json(user.rows[0])
        }
    } catch (err) {
        console.error(err)
        res.status(500).send('User request server error')
    }
})


app.get('/books/:id', async (req, res) => {
    const { id } = req.params
    try {
        const books = await pool.query ('SELECT * FROM books WHERE userId = $1 ORDER BY bookId ASC', [id])
        if (books.rowCount === 0) {
            res.status(404).send('Specified user either doesn\'t exist or has no books to view')
        } else {
            res.status(200).json(books.rows)
        }
    } catch (err) {
        console.error(err)
        res.status(500).send('Book request server error')
    }
})




// POST requests

app.post('/users', async (req, res) => {
    const { username, hashed_password, email, first_name, last_name } = req.body
    try {
        const newUser = await pool.query('INSERT INTO users (username, hashed_password, email, first_name, last_name) VALUES ($1, $2, $3, $4, $5) RETURNING *', [username, hashed_password, email, first_name, last_name])
        res.status(201).json(newUser.rows[0])
    } catch (err) {
        console.error(err)
        res.status(500).send('User creation server error')
    }
})


app.post('/books', async (req, res) => {
    const { userId, title, author, description, genre, total_pages, pages_read } = req.body
    try {
        const newBook = await pool.query('INSERT INTO books (userId, title, author, description, genre, total_pages, pages_read) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *', [userId, title, author, description, genre, total_pages, pages_read])
        if (newBook.rowCount === 0) {
            res.status(404).send('Specified user either doesn\'t exist or has no books to view')
        } else {
            res.status(200).json(newBook.rows[0])
        }
    } catch (err) {
        console.error(err)
        res.status(500).send('Book creation server error')
    }
})




// DELETE requests

app.delete('/users/:id', async (req, res) => {
    const { id } = req.params
    try {
        const deletedUser = await pool.query('DELETE FROM users WHERE userId = $1 RETURNING *', [id])
        if (deletedUser.rowCount === 0) {
            res.status(404).send('User not found')
        } else {
            res.status(201).json(deletedUser.rows[0])
        }
    } catch (err) {
        console.error(err)
        res.status(500).send('User deletion server error')
    }
})


app.delete('/books/:userId/:bookId', async (req, res) => {
    const { userId, bookId } = req.params
    try {
        const deletedBook = await pool.query('DELETE FROM books WHERE userId = $1 AND bookId = $2 RETURNING *', [userId, bookId])
        if (deletedBook.rowCount === 0) {
            res.status(404).send('Book not found')
        } else {
            res.status(201).json(deletedBook.rows[0])
        }
    } catch (err) {
        console.error(err)
        res.status(500).send('Book deletion server error')
    }
})




// UPDATE requests
app.put('/users/:id', async (req, res) => {
    const { id } = req.params
    const { username, hashed_password, email, first_name, last_name } = req.body
    try {
        const revisedUser = await pool.query('UPDATE users set username = $1, hashed_password = $2, email = $3, first_name = $4, last_name = $5 WHERE userId = $6 RETURNING *', [username, hashed_password, email, first_name, last_name, id])
        if (revisedUser.rowCount === 0) {
            res.status(404).send('User not found')
        } else {
            res.status(201).json(revisedUser.rows[0])
        }
    } catch (err) {
        console.error(err)
        res.status(500).send('User info update server error')
    }
})


app.put('/books/:userId/:bookId', async (req, res) => {
    const { userId, bookId } = req.params
    const { title, author, description, genre, total_pages, pages_read } = req.body
    try {
        const revisedBook = await pool.query('UPDATE books set title = $1, author = $2, description = $3, genre = $4, total_pages = $5, pages_read = $6 WHERE userId = $7 AND bookId = $8 RETURNING *', [title, author, description, genre, total_pages, pages_read, userId, bookId])
        if (revisedBook.rowCount === 0) {
            res.status(404).send('User not found')
        } else {
            res.status(201).json(revisedBook.rows[0])
        }
    } catch (err) {
        console.error(err)
        res.status(500).send('Book info update server error')
    }
})













app.listen(port, () => {
    console.log(`LitLobby up on ${port}`)
})