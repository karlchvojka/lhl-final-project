# Final Project - SQUABBLE - Budget Splitting app.

!['Screenshot1'](https://github.com/karlchvojka/lhl-final-project/blob/master/docs/budget.png)

## Contributors
[Karl Chvojka](https://www.google.com), [Andrea Masrantoni](https://github.com/andmast), [Eden Yeung ](https://github.com/basktballer)

## Getting Started
Clone the repo down into a folder.

There are two folders within the root.

1. Server:
The server is a PostgresSQL Database with Rails built ontop of it.
Its purpose is to handle data, and export a JSON api.

2. Client:
The client folder is a react app built seperately from the server.
This is just React.

### Prerequisits
- NPM
- Rails
### Setup

#### Server
1. cd into server folder from root
2. Install bundle: bundle install
3. Setup database: rake db:reset
4. Start Server: bin/rails s -b 0.0.0.0
5. In your browser: localhost:3000

#### Client
1. cd into /client
2. npm install
3. npm start
4. In your browser: localhost:3001
