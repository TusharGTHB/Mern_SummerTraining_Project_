const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.static('public')); // Attach Middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
// Dynamic - Routing
app.use('/',require('./routes/user'));
const server= app.listen(1234,(err)=>{
    if(err){
        console.log('Server Crash ',err);
    }
    else{ 
        console.log('Server Start ', server.address().port);
    }
})