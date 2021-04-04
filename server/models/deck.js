import mongoose  from 'mongoose'

var Schema = mongoose.Schema;

var DeckSchema = Schema({
	name: {type: String, required: true},
    creator: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    date_created: {type: Date, required: true},
    language: {type: String, required: true},
    cards: [{type: Schema.Types.ObjectId, ref: 'Card'}]
});

DeckSchema
.virtual('url')
.get(function(){
	return '/deck/' + this._id;
});

export default mongoose.model('Deck', DeckSchema);