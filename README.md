# Final Project - Budget Sharing
!['Screenshot1'](https://github.com/karlchvojka/lhl-final-project/blob/master/docs/budget.png)

## Getting Started
clone the repo down into a folder.

There are two folders within the root.

1. Server:
The server is a PostgresSQL Database with Rails built ontop of it.
Its purpose is to handle data, and export a JSON api.

2. Client:
The client folder is a react app built seperately from the server.
This is just React.

### Prerequisites

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

### Setup
## Git Flow
### DELETE BEFORE SUBMITTING
1. Pull Develop and then Branch -> Feature/
```
git checkout develop
git pull origin master
git pull origin develop
git checkout -b feature/<branch name>
```
2. Code done in FEATURE branches off develop
3. Test in Feature branch.
4. If 3 passes, Merge into Develop.
```
git checkout develop
git merge feature/branch-name
```
5. Test on Develop branch
6. Push into Remote develop
```
git push origin develop
```
7. Create pull request on Github website
