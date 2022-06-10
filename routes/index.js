const router = require('express').Router();

// import api routes
const apiRoutes = require('./api');

// add prefix
router.use('api', apiRoutes);

// err message
router.use((req, res) => {
    res.status(404).send('404 error');
});

module.exports = router;