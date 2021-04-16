import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    first_name: {type: String, required: true},
    last_name: {type: String, required: true},
    email: {type: String, required: true},
    date_joined: {type: Date, default: Date.now}
  }
);

UserSchema
.virtual('url')
.get(function () {
  return '/users/' + this._id;
});

//Export model
export default mongoose.model('User', UserSchema);