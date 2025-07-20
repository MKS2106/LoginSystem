# Innovate Inc. User Authentication API

This project provides a simple and secure user authentication system using **Node.js**, **Express**, **MongoDB**, **bcrypt**, and **JWT**. It allows users to register and log in to the Innovate Inc. user portal.

## Features
- User Registration with password hashing
- User Login with JWT authentication
- User can update profile after authentication 
- User can access a particular profile after authentication
- User can delete a particular profile after authentication
- MongoDB integration via Mongoose
- Secure password handling using bcrypt
- Environment-based configuration using dotenv 

## Technologies Used
- Node.js  
- Express.js  
- JSON for data exchange  
- DataBase: MongoDB Atlas
- ODM: Mongoose
- Environment Management: dotenv
- bcrypt
- JWT

### Prerequisites
- Node.js installed on your machine  
- nodemon Installed(npm i -D nodemon)
- dotenv Installed(npm i dotenv)
- mongoose Installed(npm i mongoose)
- express installed (npm i express)
- Postman installed
- install bcrypt library (npm install bcrypt)
- install jsonwebtoken (npm install jsonwebtoken)

### Steps to run 
- Clone the repository 
- Navigate to project directory(cd to directory)
- Install dependencies npm init y 
- Update pakage.json file as per requirement
- Add and update .env file and add the DB connection key
- Run the server (npm run dev)

### API End point 
- GET : 
1. `/api/users/`
Example Mongoose complex Query for testing(query paramater): 
-  localhost:PORT/api/users/
2. `/api/users/:id`
-  localhost:PORT/api/users/user_id

- POST
1. `api/user/register`
request body:
{
    "username": "user1",
     "email": "user1@test.com",
    "password": "password"

}
2. `api/user/login`
request body:
{
    "email": "labtest_patchrequest@test.com",
    "password": "password"
   
}

- PATCH
1. `api/users/:id`
request body:
{
    "username": "updated_user1",
   
}

- Delete
1. `api/users/:id`

### Full Flow Steps
1. register with username, email, password
2. Login with email, password --> token will be generated
3. Provide the generated token for the Authorization in postman 
4. perfrom get, patch and delete rerquests