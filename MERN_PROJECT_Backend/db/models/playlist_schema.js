// Collection Structure
const { SchemaTypes } = require('mongoose');
const connection = require('../../connection');
const Schema = connection.Schema;
const playlistSchema = new Schema({
    'userid':{type:SchemaTypes.String, required:true, unique:true},
    'song':{type:SchemaTypes.Mixed, required:true}
    // 'username':{type:SchemaTypes.String, required:true, unique:true},
    // 'password':{type:SchemaTypes.String, required:true},
    // 'mobile':{type:SchemaTypes.Number, required:true},
    // 'name':{type:SchemaTypes.String, required:true},
    // 'songimage':{type:SchemaTypes.String, required:true},
    // 'artist':{type:SchemaTypes.String, required:true},
    // 'songurl':{type:SchemaTypes.String, required:true},
    // 'songname':{type:SchemaTypes.String, required:true},
    // 'trackid':{type:SchemaTypes.String, required:true}
    //'personalInfo':{},
    //'address':{type:SchemaTypes.Array}
});  
const PlaylistModel = connection.model('playlist', playlistSchema);
module.exports = PlaylistModel;