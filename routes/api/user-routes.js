const router = require('express').Router();

const {
    getAllUsers,
    getUsersById,
    createUsers,
    updateUsers,
    deleteUsers,
    addFriend,
    deleteFriend
} = require('../../controllers/user-controller');

// direct to -> /api/users 'get, post'
router.route('/').get(getAllUsers).post(createUsers);

// direct to -> /api/users/:id 'get, put, delete'
router.route('/:id').get(getUsersById).put(updateUsers).delete(deleteUsers);

// direct to -> api/users/:userId/friends/:friendId 'post, delete'
router.route('/:id/friends/:friendId').post(addFriend).delete(deleteFriend);

module.exports = router;