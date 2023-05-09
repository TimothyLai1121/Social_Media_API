# Social_Media_API
Welcome to my social network web application API! This API allows users to share their thoughts, react to their friends' thoughts, and create a friend list. I built the API using Express.js for routing, a MongoDB database, and the Mongoose ODM.

## Table of Contents
- [Features](#features)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Walkthrough Video](#walkthrough-video)


## Features
This API has the following features:
- User model with username, email, thoughts array, and friends array fields
- Thought model with thoughtText, createdAt, username, and reactions array fields
- Reactions subdocument schema for reactions array field in the Thought model
- `GET` routes for all users, all thoughts, a single user, and a single thought
- `POST`, `PUT`, and `DELETE` routes for users and thoughts
- `POST` and `DELETE` routes for a user's friend list
- `POST` and `DELETE` routes for reactions to thoughts
- Use of Mongoose to connect to a MongoDB database
- Properly formatted timestamps using a date library or native JavaScript Date object

## Getting Started
To get started with this API, follow these steps:
1. Clone this repository to your local machine.
2. Open the terminal and navigate to the project's root directory.
3. Install the dependencies by running npm install.
4. Start the server by running npm start.

## Usage
Once the server is running, you can use a tool like Insomnia to test the API's routes. Here are some examples of how to use the API:

- GET all users: GET `/api/users`
- GET a single user by ID: GET `/api/users/:userId`
- POST a new user: POST `/api/users`
- PUT to update a user by ID: PUT `/api/users/:userId`
- DELETE a user by ID: DELETE `/api/users/:userId`
- POST a new friend for a user: POST `/api/users/:userId/friends/:friendId`
- DELETE a friend from a user's friend list: DELETE `/api/users/:userId/friends/:friendId`
- GET all thoughts: GET `/api/thoughts`
- GET a single thought by ID: GET `/api/thoughts/:thoughtId`
- POST a new thought: POST `/api/thoughts`
- PUT to update a thought by ID: PUT `/api/thoughts/:thoughtId`
- DELETE a thought by ID: DELETE `/api/thoughts/:thoughtId`
- POST a new reaction to a thought: POST `/api/thoughts/:thoughtId/reactions`
- DELETE a reaction from a thought: DELETE `/api/thoughts/:thoughtId/reactions/:reactionId`


## Walkthrough Video
I have created a walkthrough video demonstrating the functionality of the API:


- Please download the video to view it in full resolution.

[![My Video](https://drive.google.com/thumbnail?id=1jb0elVbBEQM26A5m5mtk9x84p9z5XdXf)](https://drive.google.com/file/d/1jb0elVbBEQM26A5m5mtk9x84p9z5XdXf/view?usp=sharing "My Video")
