## What is this?
Simple form app to report a christmas holiday with front-end writen in React(Redux, Redux-forms) and backend in Node.js (Express).
Bootstraped with create-react-app. Using Semantic UI CSS.

## Running the app

First, run the local MongoDB database using function:

### `mongod`

You have to have globally installed [MongoDB](https://www.mongodb.com/download-center) to do this. It should be running on default port 27017.
Then run command both in `/client` and `/api/` folders:

### `npm start`

It will open http://localhost:3000 and render the app and run API server on http://localhost:3001. 
API endpoints:
GET /form - returns all forms from db
POST /form - request to enter new form

## Testing

Tests can be run both in `/client`(Jest) and `/api`(Mocha) folders by using command: 

### `npm test`





