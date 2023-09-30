const bodyparser = require('body-parser');

const express = require('express');
const router = require('./router');
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(router);
app.use(cors());
app.use(bodyparser.json());
// app.use(bodyparser.urlencoded({ extended: true }));

module.exports = app;