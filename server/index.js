// Pull in Gateway to DB ////////////////////////////////////////////////////////
const gatewayToDB = require('../db/index.js');

// Configure Express ///////////////////////////////////////////////////////////

const bodyParser = require("body-parser");
const express = require("express");
const morgan = require("morgan");

const app = express();

// Middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// RESTful Routes for CRUD operations //////////////////////////////////////////

// TODO