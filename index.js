const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
//extra--error handler in here if we need.

//Router and DB connect
const router = require('./config/router');
const {port, dbURI} = require('./config/environment');
mongoose.connect(dbURI);

//App use for parser aswell as connecting api to router
app.use(bodyParser.json());
app.use('/api', router);
//extra--error handler use here if needed.

app.listen(port, () => console.log(`We are within the matrix connected to ${port}`));

module.exports = app;
