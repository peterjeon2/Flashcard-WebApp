var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CardSchema = new Schema(
  {
    word: {type: String, required: true},
    definition: {type: String, required: true},
  }
);


//Export model
module.exports = mongoose.model('Card', CardSchema);