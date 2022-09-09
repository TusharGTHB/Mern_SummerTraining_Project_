const express = require('express');
const userRoutes = express.Router();
const userCtrl = require('../controller/Usercontrol');
const {LOGIN, PROFILE, REGISTER, DELETE} = require('../utils/constants/app_constants').ROUTES.USER;
userRoutes.post(LOGIN, userCtrl.login);
userRoutes.post(REGISTER, userCtrl.register);
userRoutes.get(PROFILE, userCtrl.profile);
userRoutes.get(DELETE, userCtrl.deleteProfile);
module.exports = userRoutes;
