const express = require('express');
const playlistRoutes = express.Router();
const playlistCtrl = require('../controller/playlistcontrol');
const {ADD_TO_PLAYLIST,GET_PLAYLIST,REMOVE_FROM_PLAYLIST} = require('../utils/constants/app_constants').ROUTES.PLAYLIST;
playlistRoutes.post(ADD_TO_PLAYLIST,playlistCtrl.add_to_playlist);
playlistRoutes.get(GET_PLAYLIST,playlistCtrl.get_playlist);
playlistRoutes.post(REMOVE_FROM_PLAYLIST,playlistCtrl.remove_from_playlist);
module.exports = userRoutes;