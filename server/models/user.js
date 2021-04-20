import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    googleId: {
      type: String,
      required: true,
    },
    displayName: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  }
);

UserSchema
.virtual('url')
.get(function () {
  return '/users/' + this._id;
});

//Export model
export default mongoose.model('User', UserSchema);