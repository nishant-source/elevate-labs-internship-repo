# Day-03 - Books REST API (Node + Express)

Simple in-memory REST API for books. No database used — data resets when server restarts.

## Run locally

1. cd Day-03-Manage-list-of-books-using-NODE.JS
2. npm install
3. npm start

Server listens on http://localhost:3000

## Endpoints

- GET /books -> list all books
- GET /books/:id -> get single book
- POST /books -> add new book (JSON body: { title, author })
- PUT /books/:id -> update book (JSON body with fields to change)
- DELETE /books/:id -> delete book

## Quick curl examples

# list

curl http://localhost:3000/books

# add

curl -X POST -H "Content-Type: application/json" -d '{"title":"My Book","author":"Me"}' http://localhost:3000/books

# update

curl -X PUT -H "Content-Type: application/json" -d '{"title":"New Title"}' http://localhost:3000/books/1

# delete

curl -X DELETE http://localhost:3000/books/2
