var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  _id: { type:String }
  username: { type: String, required: true },
  data: { type: String },
  audio: { type: String }
});

var User = module.exports = mongoose.model('user', userSchema);
