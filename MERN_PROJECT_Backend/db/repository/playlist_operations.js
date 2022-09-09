const PlaylistModel = require("../models/playlist_schema");
module.exports = {
  async addtoplaylist(user_id, songObject) {
    var status = await PlaylistModel.create({ userid: user_id, song: songObject });
    return promise;
  },
  findplaylist(user_id) {
    const songs = PlaylistModel.findMany({
        'userid':user_id
    });
    return songs;
    
    // response.json({message:'Welcome'})
  },
  // updateplaylist(playlistObject){
  //     PlaylistModel.updateOne({userid:playlistObject.userid},{password:playlistObject.password}, (err)=>{
  //         if(err){
  //        response.json({message:'Error in updating'});
  //        }
  //         else{
  //               response.json({message:'Successfully Updated"});

  //         }
  //     });
  // },
  removefromplaylist(user_id,track_id) {
    const songs = PlaylistModel.deleteOne({
        'userid':user_id,
        'song.trackId':track_id
    });
    return songs;
  },
};
