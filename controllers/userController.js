const User = require('../models/User');

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find();
    res.json(allUsers);
  } catch (err) {
    console.log(err);
  }
};

const getSingleUser = async (req, res) => {
  try {
    const singleUser = await User.findOne({
      _id: req.params.userId,
    }).populate('thoughtList');

    if (!singleUser) {
      res.status(404).json({ message: 'No user with that ID' });
    } else {
      res.json(singleUser);
    }
  } catch (err) {
    console.log(err);
  }
};

const createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);

    res.json(newUser);
  } catch (err) {
    console.log(err);
  }
};

const updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findOneAndUpdate(
      {
        _id: req.body.userId,
      },
      { $set: req.body },
      {
        runValidators: true,
        new: true,
      }
    );

    if (!updatedUser) {
      res.status(404).json({ message: 'No user with that ID' });
    } else {
      res.json(updatedUser);
    }
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err });
  }
};

const deleteUser = async (req, res) => {
  try {
    const deleteUser = await User.findOneAndDelete({
      _id: req.body.userId,
    });
    if (!deleteUser) {
      res.status(404).json({ message: 'No user with that ID' });
    } else {
      res.json({ message: 'Deleted' });
    }
  } catch (err) {
    console.log(err);
  }
};

const addFriend = async (req, res) => {
  try {
    const singleUser = await User.findOneAndUpdate(
      //*selects user with id
      {
        _id: req.params.userId,
      },
      //*adds to friendslist with friendId param
      {
        $addToSet: { friendsList: req.params.friendId },
      },
      //*validates
      {
        runValidators: true,
        new: true,
      }
    );

    if (!singleUser) {
      res.status(404).json({ message: 'No user or friend with that ID' });
    } else {
      res.json({ message: 'Friend has been added' });
    }
  } catch (err) {
    console.log(err);
  }
};

const deleteFriend = async (req, res) => {
  try {
    const deletedFriend = await User.findByIdAndUpdate(
      //*selects user with id
      {
        _id: req.params.userId,
      },
      //*pulls friendId from friend's list
      {
        $pull: { friendsList: req.params.friendId },
      },
      {
        runValidators: true,
        new: true,
      }
    );

    if (!deletedFriend) {
      res.status(404).json({ message: 'No user or friend with that ID' });
    } else {
      res.json({ message: 'Success' });
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getAllUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
};
