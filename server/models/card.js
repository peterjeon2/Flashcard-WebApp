import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const CardSchema = new Schema(
  {
    word: {type: String, required: true},
    definition: {type: String, required: true},
    user_id: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    deck_id: {type: Schema.Types.ObjectId, ref: 'Deck', required: true}
  }
);


//Export model
export default mongoose.model('Card', CardSchema);