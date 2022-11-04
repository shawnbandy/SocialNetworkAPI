const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema(
  {
    title: String,
    body: {
      type: String,
      minLength: 10,
      maxLength: 500,
    },
    reactions: {
      type: Schema.Types.ObjectId,
      ref: 'Reactions',
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const Thoughts = model('Thoughts', thoughtSchema);

module.exports = Thoughts;
