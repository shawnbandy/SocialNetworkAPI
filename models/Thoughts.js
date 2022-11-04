const { Schema, model } = require('mongoose');
const Reactions = require('./Reactions');

function formatDate(date) {
  let d = new Date(date);
  let month = '' + d.getMonth();
  let day = '' + d.getDate();
  let year = d.getFullYear();

  return [month, day, year].join('-');
}

const thoughtSchema = new Schema(
  {
    thoughtText: { type: String, required: true, maxlength: 280, minlength: 1 },
    createdAt: {
      type: Date,
      default: Date.now,
      set: (date) => formatDate(date),
    },
    username: { type: String, required: true },
    reactions: [Reactions],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

const Thoughts = model('Thoughts', thoughtSchema);

module.exports = Thoughts;
