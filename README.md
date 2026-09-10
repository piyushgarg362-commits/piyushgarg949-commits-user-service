# User Service

User management microservice built with Node.js and Express.

## Responsibilities

The User Service manages:

- User creation
- User retrieval
- User deletion
- User health status

## Technology

- Node.js
- Express
- Jest
- Supertest
- Docker

## Port

3001

## API Endpoints

### Health

GET /health

Response:

{
  "service": "user-service",
  "status": "UP"
}

### Get all users

GET /users

### Get user

GET /users/:id

Example:

GET /users/1

### Create user

POST /users

Request:

{
  "name": "Alice",
  "email": "alice@example.com"
}

### Delete user

DELETE /users/:id

## Local Setup

Install dependencies:

npm install

Start:

npm start

Development:

npm run dev

## Test

npm test

## Docker

Build:

docker build -t user-service .

Run:

docker run -p 3001:3001 user-service

## Repository

https://github.com/piyushgarg949-commits/user-service
