const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;

const routes = require('./api/routes/messageRoutes');
const Message = require('./api/models/messageModel');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/ContactDb');

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

app.listen(port);

console.log(`Listening on port ${port}`);
