const { Reactions, Thoughts } = require('../models');
const User = require('../models/User');

const cascadeDelete = (req, res, next) => {
  User.schema.pre('remove', function (next) {
    // 'this' is the client being removed. Provide callbacks here if you want
    // to be notified of the calls' result.
    Thoughts.remove({ client_id: this._id }).exec();
    Reactions.remove({ client_id: this._id }).exec();
    next();
  });
};

module.exports = cascadeDelete;
