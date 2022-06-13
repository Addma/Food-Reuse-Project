const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const app = express();
const signUpRoutes = require('./routes/signupRoute');
const loginRoutes = require('./routes/loginRoutes');
const adminRoutes = require('./routes/adminRoutes');
const updateRoutes = require('./routes/updateFood');
const profileRoutes = require('./routes/profileRoutes');
const mongoose=  require('mongoose');
dotenv.config();
app.use(cors());
app.use("/signup", signUpRoutes);
app.use("/login", loginRoutes);
app.use("/admin", adminRoutes);
app.use("/dashboard", updateRoutes);
app.use("/profile", profileRoutes);
mongoose.connect(process.env.MONGO_URL,  () => console.log("Connected to MongoDB"))
app.listen(process.env.PORT, () => console.log("Connected to Port 3001"))

app.get("/", (req, res) => {
    res.send("<h1>HI</h1>")
})