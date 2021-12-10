const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LoginInfo = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  pwd: {
    type: String,
    required: true
  }
});


const User = mongoose.model("usercredentials", LoginInfo);


module.exports = User;