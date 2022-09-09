const UserModel = require('../models/user_schema');
module.exports = {
    
    add(userObject)
    {
        var promise = UserModel.create(userObject);
        return promise;
    },
    find(userObject, response){
        console.log(userObject);
        UserModel.findOne({userid:userObject.userid, password:userObject.password},(err, doc)=>{
            if(err){ 
                response.json({message:'Some DB Error  '});
            }
            else if(doc){
                response.json({message:'Welcome '+userObject.userid});
            }
            else{
                response.json({message:'Invalid Userid or Password'});
            }
        })
        // response.json({message:'Welcome'})
    },
    update(userObject){
        UserModel.updateOne({userid:userObject.userid},{password:userObject.password}, (err)=>{
            if(err){

            }
            else{
                
            }
        });
    },
    remove(userid){

    }
}