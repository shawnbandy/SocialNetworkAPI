const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    username: { type: String, required: true, unique: true, trim: true },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: function (v) {
          //*regex for valid email
          return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(v);
        },
      },
    },

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

userSchema.virtual('friendCount').get(function (v) {
  return this.friendsList.length;
});

const User = model('User', userSchema);

module.exports = User;
