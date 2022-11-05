const router = require('express').Router();
const {
  getAllUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require('../../controllers/userController');

//*potential middleware for cascade? can't get it to work
const cascadeDelete = require('../../utils/cascade');

//* /api/users for get, post, put, and delete
router
  .route('/')
  .get(getAllUsers)
  .post(createUser)
  .put(updateUser)
  .delete(deleteUser);

router.route('/:userId').get(getSingleUser);

router.route('/:userId/friends/:friendId').post(addFriend).delete(deleteFriend);

module.exports = router;
