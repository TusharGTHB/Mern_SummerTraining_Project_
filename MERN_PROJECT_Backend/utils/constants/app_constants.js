//  Application Constants Define Here
module.exports = {
    ROUTES :{
        USER:{
            LOGIN :'/login',
            PROFILE:'/profile',
            REGISTER:'/register',
            DELETE:'/delete/:user'
        },
        PLAYLIST:{
            ADD_TO_PLAYLIST:'/add_to_playlsit',
            REMOVE_FROM_PLAYLIST:'/remove_from_playlist',
             GET_PLAYLIST:'/get_playlist'
        }
    }
}