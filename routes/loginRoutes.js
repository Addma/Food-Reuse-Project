const express = require('express');
const app = express.Router();
const cors = require('cors');
const userSchema = require('../models/userSchema');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => { 
    res.send("<h1>HELLO2</h1>")
})
app.post("/",  async (req, res) => {
    const data = req.body;
    console.log(data.email);
    const foundUser = await userSchema.findOne({
        email: data.email,
    })
    console.log(foundUser);
    if (foundUser){
    const pass = data.password;
    const userHashedPassword = foundUser.password; 
    const auth = bcrypt.compareSync(pass, userHashedPassword);
    console.log("founduserr", foundUser);
    if (auth){
            return res.json({status: "ok", user: foundUser});
        }
    else {
            return res.json({status: "err"})
        }
    } else {
        return res.json({status: "err", message: "account doesn't exist"});
    }
    
})

module.exports = app;
