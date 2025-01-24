const mongoose = require('mongoose');

async function connectMongoDB(url){
    return mongoose.connect(url)
    .then(()=>console.log(" Database Connection succesful"))
    .catch(()=> console.log("Error in Database connection!"));
}

module.exports = connectMongoDB;