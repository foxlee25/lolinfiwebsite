This project require to have mongodb installed, to install mongodb, on mac use brew: brew install mongodb after mongo installed successfully, then run mongodb with the specification to your data directory, assume you are in project server directory, run sudo mongod --dbpath mongo/ , this will start your mongodb server, and create all the data in mongo/ directory.

*Note, since our database will grow over time so in order to sync up all the data across different repo, everytime before you commit the code do a sudo mongodump --out backup/ in the server directory, that will package our database data into bson files, same goes for pull the data, so everytime new changes comming in might have updated version of the database, so do mongorestore backup/ this will restore all the bson files into the database.

You can access the mongodb shell by open another terminal and type in: /usr/local/Cellar/mongodb/3.2.3/bin/mongo 
show dbs will show the database table, swtich <db name> change to particular db, show collections will show the collections inside the db

To start up run node app.js in server directory, and the access page is at localhost:8080/LolInfi

The client side is using bower package management system, and server side is using npm package management.

To install bower run npm install -g bower and all the bower components are located in client/bower_component, run bower insatll --save-dev <your package name> to add the project dependency, and npm components are located in server/npm_component, run npm install --save-dev <your package name> to add the project dependency.

To auto refresh server files while developing, npm install -g nodemon , then start app.js by nodemon app.js

