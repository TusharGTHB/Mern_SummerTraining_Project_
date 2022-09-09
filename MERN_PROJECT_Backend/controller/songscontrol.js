const repo = require('../db/repository/songs_operations');
const songs_operations = require('../db/repository/songs_operations');
module.exports = {
    find_in_playlist(request, response){
        //console.log(request.body);
        const songs_object = request.body;
        console.log('USER #### ',songs_object );
        songs_operations.findplaylist(songs_object, response);
        // if(userObject.userid === userObject.password){
        //     response.json({message:messages['welcome']+userObject.userid});
        // }
        // else{
        //     response.json({message:messages['invalid']});
        // }
    },
    async add_to_playlist(request, response){
        const songs_object = request.body;
        // Repository
        // console.log(request.body)
        const result = await repo.addtoplaylist(songs_object);
        //response.json(result);
        if(result && result.trackid)
         {
            response.json({message:'Song Added in songlist SuccessFully '});
         }
        else
         {
            response.json({message:'Problem in adding song in songlist'});
         }
    },
    remove_from_playlist(request, response){
        console.log(request.params);
        const song = request.params.song; // Path parameters
        response.json({message:'User Delete Profile is ', trackid:song});
    }
}