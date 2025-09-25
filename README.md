# job-application-tracker
A RESTful API for tracking job applications built with Node.js, Express.js, and MongoDB.
How to Run Locally

Follow these steps to run the project on your own computer:

Clone the repository
Download the project by running this command in your terminal:

git clone https://github.com/Smitojit/job-application-tracker.git
cd job-application-tracker


Install dependencies
Install all the required packages:

npm install


Set up environment variables

Create a file named .env in the root folder.

Add the following inside it:

MONGO_URI=mongodb://127.0.0.1:27017/jobTracker
PORT=5000


Start the server
Run the server with:

node server.js


or, if you installed nodemon:

npx nodemon server.js


Test the API
Use Postman (or any API client) and hit the following endpoints:

GET http://localhost:5000/api/applications → Fetch all job applications

POST http://localhost:5000/api/applications → Add a new job application

PUT http://localhost:5000/api/applications/:id → Update an application by ID

DELETE http://localhost:5000/api/applications/:id → Delete an application by ID
