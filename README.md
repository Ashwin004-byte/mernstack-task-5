 
Express Backend Fundamentals

## Introduction

This project demonstrates the basics of backend development using Node.js and Express.js. The application exposes multiple API endpoints and returns mock JSON data, helping understand how servers handle requests and responses.

## Tech Stack

* Node.js
* Express.js
* Nodemon

## Project Goals

* Setup an Express server
* Create API endpoints
* Return JSON responses
* Work with mock datasets
* Understand backend routing

## Available Routes

### GET /

Returns server information and current status.

### GET /api/users

Returns a list of mock users with their roles.

### GET /api/status

Provides information about the running server and active port.

## Sample Features

* Lightweight Express server
* REST-style API endpoints
* Structured JSON responses
* Middleware integration using `express.json()`
* Automatic server restart using Nodemon

## Folder Structure

```text
mernstack-task-5
│
├── server.js
├── package.json
├── package-lock.json
└── README.md
```

## What I Learned

* How Express creates web servers
* How API routes are defined
* Sending JSON data to clients
* Using middleware in Express
* Improving development workflow with Nodemon

## Interview Preparation

### What is Express Middleware?

Middleware functions execute during the request-response cycle. They can modify requests, validate data, log information, and perform many other tasks before the final response is sent.

### What is the Purpose of Nodemon?

Nodemon automatically monitors project files and restarts the server whenever changes are detected, making development faster and more efficient.

## Outcome

Successfully built a foundational backend application using Express.js with working API routes, mock data handling, middleware usage, and development automation through Nodemon.
