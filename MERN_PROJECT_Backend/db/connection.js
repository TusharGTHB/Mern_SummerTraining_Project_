const mongoose = require('mongoose');
// const URL = process.env.DB_URL
const URL = "mongodb+srv://TusharGupta:Tushar123@application.jsekh0o.mongodb.net/pizzadb?retryWrites=true&w=majority"
mongoose.connect(URL,{maxPoolSize:5},(err)=>{
    if(err){
        console.log('DB Error ', err);
    }
    else{
        console.log('DB Connection Created...');
    }
});
module.exports = mongoose;