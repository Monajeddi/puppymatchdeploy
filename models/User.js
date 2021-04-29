const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  lastName: String,
  email: { 
      type: String, 
      required: true },
  password: { 
      type: String, 
      required: true },
  phone: {
    type: Number,
    required: true,
  },
  picture: {
    type: String,
    default:''
},
role:{
  type: Number,
  enum:[0,1],
  default:0,
}

});

module.exports = User = model("user", UserSchema);