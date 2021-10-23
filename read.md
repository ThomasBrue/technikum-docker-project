> The app can be built and run using this command:

docker-compose up

> Open the app in the browser via this URL:

http://localhost:8080/

> You can add a user to your database via:

POST http://localhost:8080/subscribers

> > The user has to be added in the following JSON format schema:

{
"name": "Jimmy",
"subscribedToChannel": "Coding-With-Sam"  
}

> You can look up all subscriber via:

GET http://localhost:8080/subscribers

> You can look up a specific subscriber by providing a UID:

GET http://localhost:8080/subscribers/616de44492d743ba373ae05b

> You can delete a user by providing the UID of the user to be deleted:

DELETE http://localhost:8080/subscribers/616df948b31a83a1faef3dc0

> > You can alter the data of a specific user by providing a UID and the JSON data:

PATCH http://localhost:8080/subscribers/616df92eb31a83a1faef3dbe

{
"name": "Susan"
}

> Running the app without Docker (local development)

> The local development environment requires you to install mongoDB on your machine.

> You can start the server via “npm run devStart”.

> Check if the server is running by entering this URL in your browser:

http://localhost:8080/
