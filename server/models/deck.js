import mongoose  from 'mongoose'

const Schema = mongoose.Schema;

const DeckSchema = Schema({
	name: {type: String, required: true},
    userId: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    date_created: {type: Date, required: true},
    description: {type: String, required: true},
    cards: [{type: Schema.Types.ObjectId, ref: 'Card'}]
});

DeckSchema
.virtual('url')
.get(function(){
	return '/decks/' + this._id;
});

export default mongoose.model('Deck', DeckSchema);