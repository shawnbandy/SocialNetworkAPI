const router = require('express').Router();
const {
  getAllThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
} = require('../../controllers/thoughtController');

//* /api/thoughts for get, post, put and delete

router
  .route('/')
  .get(getAllThoughts)
  .post(createThought)
  .put(updateThought)
  .delete(deleteThought);

router.route('/:thoughtId').get(getSingleThought);

router.route('/:thoughtId/reactions').post(addReaction).delete(deleteReaction);

module.exports = router;
