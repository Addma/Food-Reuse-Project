const express = require('express')
const app = express.Router();
const userSchema = require('../models/userSchema');
const cors = require('cors');

app.use(cors());

app.use(express.json());




module.exports = app;