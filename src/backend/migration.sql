DROP TABLE IF EXISTS USERS CASCADE;
DROP TABLE IF EXISTS BOOKS;

CREATE TABLE users (
    userId INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    username TEXT NOT NULL UNIQUE,
    hashed_password TEXT, 
    email TEXT NOT NULL UNIQUE,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL
);


CREATE TABLE books (
    bookId INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY, 
    userId INTEGER ,
    title TEXT,
    author TEXT,
    description TEXT,
    genre TEXT,
    total_pages INTEGER, 
    pages_read INTEGER,
    FOREIGN KEY (userId) REFERENCES users(userId) ON UPDATE CASCADE ON DELETE CASCADE
);


