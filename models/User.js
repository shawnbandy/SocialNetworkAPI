const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    first: { type: String, required: true },
    last: { type: String, required: true },
    age: Number,
    friendsList: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    thoughtList: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thoughts',
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const User = model('User', userSchema);

module.exports = User;
