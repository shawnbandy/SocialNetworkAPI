const { Thoughts, User, Reactions } = require('../models');

const getAllThoughts = async (req, res) => {
  try {
    const allThoughts = await Thoughts.find();
    res.json(allThoughts);
  } catch (err) {
    console.log(err);
  }
};

const getSingleThought = async (req, res) => {
  try {
    const singleThought = await Thoughts.findOne({
      _id: req.params.thoughtId,
    }).select('-__v');

    if (!singleThought) {
      res.status(404).json({ message: 'No thought with that ID' });
    } else {
      res.json(singleThought);
    }
  } catch (err) {
    console.log(err);
  }
};

const createThought = async (req, res) => {
  try {
    const newThought = await Thoughts.create(req.body);
    const addToUser = await User.findOneAndUpdate(
      { username: req.body.username },
      {
        $addToSet: { thoughtList: newThought._id },
      },
      {
        new: true,
      }
    );
    res.json(newThought);
  } catch (err) {
    console.log(err);
  }
};

const updateThought = async (req, res) => {
  try {
    const updatedThought = await Thoughts.findOneAndUpdate(
      {
        _id: req.body.thoughtId,
      },
      { $set: req.body },
      {
        runValidators: true,
        new: true,
      }
    );

    if (!updatedThought) {
      res.status(404).json({ message: 'No thought with that ID' });
    } else {
      res.json(updatedThought);
    }
  } catch (err) {
    console.log(err);
  }
};

const deleteThought = async (req, res) => {
  try {
    const deletedThought = await Thoughts.findOneAndRemove({
      _id: req.body.thoughtId,
    });
    if (!deletedThought) {
      res.status(404).json({ message: 'No thought with that ID' });
    } else {
      res.json({ message: 'Deleted' });
    }
  } catch (err) {
    console.log(err);
  }
};

const addReaction = async (req, res) => {
  try {
    const selectedThought = await Thoughts.findOneAndUpdate(
      {
        _id: req.params.thoughtId,
      },
      {
        $addToSet: { reactions: req.body },
      },
      {
        runValidators: true,
        new: true,
      }
    );

    if (!selectedThought) {
      res.status(404).json({ message: 'No thought with that ID' });
    } else {
      res.json(selectedThought);
    }
  } catch (err) {
    console.log(err);
  }
};

const deleteReaction = async (req, res) => {
  try {
    const selectedThought = await Thoughts.findOneAndUpdate(
      {
        _id: req.params.thoughtId,
      },
      {
        $pull: { reactions: { _id: req.body.reactionId } },
      },
      {
        runValidators: true,
        new: true,
      }
    );

    if (!selectedThought) {
      res.status(404).json({ message: 'No thought with that ID' });
    } else {
      res.json(selectedThought);
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getAllThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
};
