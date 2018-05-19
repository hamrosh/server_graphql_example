const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const schema = require('./Schema/schema');
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const app = express();
const PORT = 5000;
const mongoURI = 'mongodb://sa:ham24MDB@ds259499.mlab.com:59499/itigurus'; // move this key to the config file later

// Cors used for request from CLient App  in Local Development

app.use(cors());

// mongobd Connection and Setup

mongoose.connect(mongoURI);
mongoose.connection.once('open', () => {
  console.log('Connected to Database ');
});

//  Setting the Graphql Endpoints

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

// Starting the server on Port , usee the ENV.PORT varialble Later

app.listen(PORT, () => {
  console.log('Listening on Port 5000');
});
