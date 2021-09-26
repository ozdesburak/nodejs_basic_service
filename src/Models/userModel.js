const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  password: { type: String },
  isadmin:{type:Boolean}
});
mongoose.model('user', UserSchema);

module.exports = mongoose.model('user');