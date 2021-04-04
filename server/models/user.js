import mongoose from 'mongoose'

var Schema = mongoose.Schema;

var UserSchema = new Schema(
  {
    first_name: {type: String, required: true},
    last_name: {type: String, required: true},
    email: {type: String, required: true},
    date_joined: {type: Date, required: true},
    sets: [{type: Schema.Types.ObjectId, ref: 'Set'}]
  }
);

UserSchema
.virtual('url')
.get(function () {
  return '/user/' + this._id;
});

//Export model
export default mongoose.model('User', UserSchema);