const router = require('express').Router();

// routes 
const usersRoutes = require('./user-routes');
const thoughtsRoutes = require('./thought-routes');

// add prefix
router.use('/users', usersRoutes);
router.use('/thoughts', thoughtsRoutes);

module.exports = router;