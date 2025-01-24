const express = require('express');
const router = express.Router();
const {handleSignUp,handleLogIn} = require("../controllers/user");

router.post('/',handleSignUp)
router.post('/LogIn',handleLogIn)
module.exports = router;