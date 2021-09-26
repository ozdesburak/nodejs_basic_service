const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
  subject: { type: String },
  username: { type: String },
  mail: { type: String },
  country:{type:String}
});
mongoose.model('contact', ContactSchema);

module.exports = mongoose.model('contact');

