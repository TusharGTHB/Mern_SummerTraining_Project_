// Collection Structure
const { SchemaTypes } = require('mongoose');
const connection = require('../connection');
const Schema = connection.Schema;
const userSchema = new Schema({
    'userid':{type:SchemaTypes.String, required:true, unique:true},
    'password':{type:SchemaTypes.String, required:true},
    'mobile':{type:SchemaTypes.Number, required:true},
    'name':{type:SchemaTypes.String, required:true},
    'personalInfo':{},
    'address':{type:SchemaTypes.Array}
});
const UserModel = connection.model('users', userSchema);
module.exports = UserModel;
// const validateUser = (user) => {
//     const schema = joi.object({
//       email: joi.string().email().min(5).max(500).required(),
//       password: joi.string().min(8).max(1024).required(),
//     })
//     return schema.validate(user)
//   }
//   module.exports = {
//     UserModel,
//     validateUser,
//   }