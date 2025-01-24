const User = require("../models/user");
const { v4 : uuidv4} = require('uuid');
const {setuser , getuser} = require("../service/auth");

async function handleSignUp(req,res){
    const {name, email , password ,confirmpassword} = req.body;
    if(password!==confirmpassword){
        return res.render("SignUp" , {
            error : "Password does not match!"
        })
    }
    User.create({
        name : name ,
        email : email,
        password : password
    });

    return res.redirect("/");
}

async function handleLogIn(req,res){
    const {email , password } = req.body;
    const user =await User.findOne({email:email});
    if(!user || user.password!==password){
        res.render("LogIn", {
            loginError : "Invalid email or Password!"
        });
    }
    console.log(user);
    const token = setuser(user);
    res.cookie('uid',token);
    return res.redirect("/");
}

module.exports = {handleSignUp,handleLogIn};