# Tambola-Ticket-Create-API Project

The Tambola Ticket Create API is a project developed by the user that allows users to create and fetch Tambola tickets. Tambola, also known as Bingo or Housie, is a popular numbers game.

## Installation

1. Clone the repository: `git clone https://github.com/SomnathKar000/Tambola-Ticket-Create-API`
2. Install the dependencies: `npm install`
3. Create an `.env` file in the root directory of the project.
4. Define the following environment variables in the `.env` file:
   - `MONGODB_URL=<your-db-url>`: The MongoDB URL for connecting to the database.
   - `JWT_SECRET_KEY=<your-secret-key>`: The secret key used for authentication.

## Usage

- Run the application: `npm start`


## API Details

### Login API

- URL: http://localhost:5000/api/v1/user/login
- Method: POST
- Payload: Include your email and password in the request body for authentication.

### Tambola Ticket Create API

- URL: http://localhost:5000/api/v1/ticket/create
- Method: POST
- Headers: Include the "auth-token" header with the token obtained from the Login API.

### Tambola Ticket Fetch API

- URL: http://localhost:5000/api/v1/ticket
- Method: GET
- Headers: Include the "auth-token" header with the token obtained from the Login API.

Please ensure that you have set the appropriate environment variables and configured your API testing application to send requests to the specified URLs.

Remember to replace `<your-db-url>` with the actual MongoDB URL and `<your-secret-key>` with your desired secret key.

Feel free to add more sections and customize the content as per the needs of your project.
