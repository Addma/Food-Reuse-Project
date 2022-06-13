const express = require('express')
const app = express.Router();
const cors = require('cors');
const userSchema = require('../models/userSchema'); 
const dotenv = require('dotenv').config();
const axios = require('axios')
app.use(cors());

app.use(express.json());
const foodAPI = process.env.FOOD_API;

app.post('/addfood', async (req, res) => {
    const userData = req.body.user;
    const food = req.body.food;
    const url = `${foodAPI}&ingr=${food}&category=generic-foods`
    const resp = await axios.get(url)
    if (resp){
        const APIfoodObj = [resp.data.parsed[0].food];
        if (userData.foods.some(food => food.foodId === APIfoodObj[0].foodId)){
            return res.json({status: "err", mesasage: "You already have this food."})
        }
        const upFoods = [...userData.foods, ...APIfoodObj]
        await userSchema.findOneAndUpdate(
            {_id: userData._id}, {foods: upFoods}
        )
        userData.foods = upFoods;
        return res.json({status: "ok", data: userData});
    }else {
        return res.json({status: "err", message: "Can't find this food. Check spelling or be more specific."})
    }
    
})



module.exports = app;