//const messages = require('../utils/locale/en');
const repo = require('../db/repository/user_operations');
const user_operations = require('../db/repository/user_operations');
module.exports = {
    login(request, response){
        //console.log(request.body);
        const userObject = request.body;
        console.log('USER #### ', userObject);
        user_operations.find(userObject, response);
        // if(userObject.userid === userObject.password){
        //     response.json({message:messages['welcome']+userObject.userid});
        // }
        // else{
        //     response.json({message:messages['invalid']});
        // }
    },
    async register(request, response){
        const userObject = request.body;
        // Repository
        // console.log(request.body)
        const result = await repo.add(userObject);
        //response.json(result);
        if(result && result.userid)
         {
            response.json({message:'User Register SuccessFully '});
         }
        else
         {
            response.json({message:'Problem in User Register'});
         }
        // const promise = repo.add(userObject);
        // promise.then(result=>{

        // })

    },
    profile(request, response){
        const userObj = request.query; //?user=Amit (QueryString)
        response.json({message:'User Profile is ', userid: userObj.user})
    },
    deleteProfile(request, response){
        console.log(request.params);
        const user = request.params.user; // Path parameters
        response.json({message:'User Delete Profile is ', userid: user});
    }

}