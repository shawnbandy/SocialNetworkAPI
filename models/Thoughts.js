const { Schema, model } = require('mongoose');
const Reactions = require('./Reactions');
const moment = require('moment');

const thoughtSchema = new Schema(
  {
    thoughtText: { type: String, required: true, maxlength: 280, minlength: 1 },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (v) => moment(v).format('MMM DD, YYYY'),
    },
    username: { type: String, required: true },
    reactions: [Reactions],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});
thoughtSchema.virtual('setDate').set(function (date) {
  return formatDate(this.createdAt);
});

const Thoughts = model('Thoughts', thoughtSchema);

module.exports = Thoughts;
