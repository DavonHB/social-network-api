const router = require('express').Router();

// requirements
const {
    getAllThoughts,
    getThoughtsById,
    createThoughts,
    updateThoughts,
    deleteThoughts,
    addReaction,
    deleteReaction
} = require('../../controllers/thoughts-controller');

// directs to -> /api/thoughts 'get'
router.route('/').get(getAllThoughts);

// direct to -> /api/thoughts/:d 'get, put, delete'
router.route('/:id').get(getThoughtsById).put(updateThoughts).delete(deleteThoughts);

// directs to -> /api/thoughts/:userId 'post'
router.route('/:userId').post(createThoughts);

// direct to -> /api/thoughts/:thoughtId/reactions 'post'
router.route('/:thoughtId/reactions').post(addReaction);

// direct to => /api/thoughts/:thoughtId/reactionId 'delete'
router.route('/:thoughtId/reactions/:reactionId')/delete(deleteReaction);

module.exports = router;