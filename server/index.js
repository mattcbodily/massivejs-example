require('dotenv').config();
const express = require('express'),
      massive = require('massive'),
      ctrl = require('./controller'),
      //destructuring our variables from our .env file from the process.env object
      {SERVER_PORT, CONNECTION_STRING} = process.env,
      app = express();

app.use(express.json());

//massive takes the connection string of our database to connect to the database
massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('DB connected');
});

app.get('/api/users', ctrl.getUsers);
app.post('/api/user', ctrl.postUser);
app.put('/api/user/:id', ctrl.updateUser);
app.delete('/api/user/:id', ctrl.deleteUser);

//SERVER_PORT comes from the .env file
const port = SERVER_PORT;
app.listen(port, () => console.log(`Server running on ${port}`));