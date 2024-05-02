const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  updateUser,
  addFriend,
  removeFriend,
} = require('../../controllers/userController');

// /api/user
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

// /api/users/:userId/assignments

//ap/users/userId

// /api/students/:userId/assignments/:assignmentId
router.route('/:userId/friends/:friendId').delete(removeFriend).post(addFriend);
module.exports = router;
