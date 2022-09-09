// const PlaylistModel = require('../models/songs_schema');
// module.exports = {
    
//     addtosonglist(songObject)
//     {
//         var promise = PlaylistModel.create(songObject);
//         return promise;
//     },
//     findsong(songObject, response){
//         console.log(songObject);
//         PlaylistModel.findOne({trackid:songObject.trackid, songname:songObject.songname},(err, doc)=>{
//             if(err){ 
//                 response.json({message:'Some DB Error'});
//             }
//             else if(doc){
//                 response.json({message:'Your song is '+songObject.songname+'& Your track id is '+songObject.trackid});
//             }
//             else{
//                 response.json({message:'Invalid trackid or song'});
//             }
//         })
//         // response.json({message:'Welcome'})
//     },
//     // updateplaylist(playlistObject){
//     //     PlaylistModel.updateOne({userid:playlistObject.userid},{password:playlistObject.password}, (err)=>{
//     //         if(err){
//     //        response.json({message:'Error in updating'});
//     //        }
//     //         else{
//     //               response.json({message:'Successfully Updated"});

//     //         }
//     //     });
//     // },


//     // removefromplaylist(playlistObject){
//     //     console.log(playlistObject);
//     //     PlaylistModel.deleteone({trackid:playlistObject.trackid, songname:playlistObject.songname},(err, doc)=>{
//     //         if(err){ 
//     //             response.json({message:'Some DB Error'});
//     //         }
//     //         else if(doc){
//     //             response.json({message:'Your song  '+playlistObject.songname+ ' is   deleted from playlist'});
//     //         }
//     //         else{
//     //             response.json({message:'Invalid trackid or song'});
//     //         }
//     //     })
//     //     // response.json({message:'Welcome'})
//     // },
//     }
