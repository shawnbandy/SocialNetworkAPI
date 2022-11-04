const { Schema, model, Types } = require('mongoose');

function formatDate(date) {
  let d = new Date(date);
  let month = '' + d.getMonth();
  let day = '' + d.getDate();
  let year = d.getFullYear();

  return [month, day, year].join('-');
}

const rxnSchema = new Schema({
  reactionID: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  reactionBody: {
    type: String,
    required: true,
    maxlength: 280,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    set: (date) => formatDate(date),
  },
});

module.exports = rxnSchema;
