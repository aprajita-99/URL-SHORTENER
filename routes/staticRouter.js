const express = require('express');
const router = express.Router();

router.get("/",(req,res)=>{
    return res.render("home");
})
router.get("/SignUp",(req,res)=>{
    return res.render("SignUp");
})
router.get("/LogIn",(req,res)=>{
    return res.render("LogIn");
})
module.exports = router;