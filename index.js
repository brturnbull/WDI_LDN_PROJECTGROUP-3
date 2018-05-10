const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const errorHandler = require('./lib/errorHandler');

//Router and DB connect---------------------------------------------------------
const router = require('./config/router');
const {port, dbURI} = require('./config/environment');
mongoose.connect(dbURI);

// App use for parser aswell as connecting api to router. Error Handler set in lib use.
app.use(bodyParser.json());
app.use('/api', router);
app.use(errorHandler);
//------------------------------------------------------------------------------
app.listen(port, () => console.log(`Connected to port ${port}`));
//------------------------------------------------------------------------------
module.exports = app;
