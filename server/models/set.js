var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var SetSchema = Schema({
	name: {type: String, required: true, max: 3 , min: 100},
    creator: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    date_created: {type: Date, required: true},
});

GenreSchema
.virtual('url')
.get(function(){
	return '/set/' + this._id;
});

module.exports = mongoose.model('Set', SetSchema);