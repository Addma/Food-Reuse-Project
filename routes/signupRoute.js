const express = require('express');
const cors = require('cors');
const app = express.Router();
const userSchema = require('../models/userSchema');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => { 
    res.send("<h1>HELLO</h1>")
})
app.post("/", async (req, res) => {
    const data = req.body;
    try {
        const findDuplicate = await userSchema.find({
            email: data.email
        })
        console.log('find', findDuplicate);
        if (findDuplicate.length){
            return res.json({status: "error, found duplicate"})
        } else {
                const salt = bcrypt.genSaltSync(10);
                const password = bcrypt.hashSync(data.password, salt);
                const newUser = await userSchema.create({
                    organization: data.organization,
                    email: data.email,
                    password: password,
                    address: data.address,
                    account: data.account
                })
                console.log(newUser, "USER");
                return res.json({status: "ok"})
                }
        }catch(err) {
            return res.json({status: "server error"});
        }
        
})

module.exports = app;
