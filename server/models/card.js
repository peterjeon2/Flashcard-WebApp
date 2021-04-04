import mongoose from 'mongoose'

var Schema = mongoose.Schema;

var CardSchema = new Schema(
  {
    word: {type: String, required: true},
    definition: {type: String, required: true},
    creator: {type: Schema.Types.ObjectId, ref: 'User', required: true}
  }
);


//Export model
export default mongoose.model('Card', CardSchema);