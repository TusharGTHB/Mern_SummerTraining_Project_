const repo = require("../db/repository/playlist_operations");
const playlist_operations = require("../db/repository/playlist_operations");
module.exports = {
  get_playlist(request, response) {
    const user_id = request.body.user_id;
    // const
    console.log("USER #### ", playlistObject);
    const promise = playlist_operations.findplaylist(user_id);
    promise
      .then((data) => {
        response.status(200).json({ songs: data });
      })
      .catch((err) => response.status(500).json({ err: err }));
  },
  async add_to_playlist(request, response) {
    const user_id = request.body.user_id;
    const song = request.body.song;
    const result = await repo.addtoplaylist(user_id,song);
    if (result) {
      response.json({ message: "Song Added in Playlist SuccessFully " });
    } else {
      response.json({ message: "Problem in adding Playlist" });
    }
  },
  remove_from_playlist(request, response) {
    const user_id = request.body.user_id;
    const song_id = request.body.song;
    const status = repo.removefromplaylist(user_id,song_id);
    response.json({ message: "User Delete Profile is ", trackid: song });
  },
};
