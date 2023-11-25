# Mongoose Express CRUD - NodeTypeDB

A Node.js Express application with TypeScript as the programming language, integrating MongoDB with Mongoose for user data and order management.

### Live server link : https://database-api-node-type-qeiikweqc-alamin0x01.vercel.app/

## Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (Node Package Manager)
- [MongoDB](https://www.mongodb.com/) (Ensure MongoDB server is running)

## Getting Started

### 1. Clone the repository:

```bash
git clone https://github.com/Alamin0x01/NodeTypeDB.git

```

### 2. Navigate to the project directory:

```bash
cd NodeTypeDB
```

### 3. Install dependencies:

```bash
npm install
```

### 5. Set up the environment variables:

Create a .env file in the root of the project and add the following:

```bash
PORT = 5000
MONGODB_URI = mongodb://localhost:27017/your-database
```

### 6. Run the application:

```bash
ts-node-dev --respawn --transpile-only src/server.ts
```

The application will be running at http://localhost:5000 by default. You can access it through your web browser.

## About API Endpoints:

- POST /api/users - Create a new user
- GET /api/users - Retrieve a list of all users
- GET /api/users/:userId - Retrieve a specific user by ID
- PUT /api/users/:userId - Update user information
- DELETE /api/users/:userId - Delete a user
- PUT /api/users/:userId/orders - Add a new product in order
- GET /api/users/:userId/orders - Retrieve all orders for a specific user
- GET /api/users/:userId/orders/total-price - Calculate the total price of orders for a specific user
