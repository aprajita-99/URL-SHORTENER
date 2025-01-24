const express = require("express");
const app = express();
const path = require('path');
app.listen(9999 , ()=>{console.log("Server started")});
const URLrouter = require("./routes/url");
const connectMongoDB = require("./connection");
const staticRouter = require("./routes/staticRouter");
const UserRouter = require("./routes/user");
const cookieParser = require("cookie-parser");
const RestrictToLoggedInUserOnly= require("./middlewares/auth");


app.use(express.urlencoded({extended : false})); //ye middleware form ke data ko support krne ke liye haii
app.use(cookieParser()); 
connectMongoDB("mongodb://127.0.0.1:27017/short-url")
app.set("view engine","ejs")
app.set('views',path.resolve("./views"));
app.use("/url", RestrictToLoggedInUserOnly, URLrouter);
app.use("/",staticRouter);
app.use("/user",UserRouter);