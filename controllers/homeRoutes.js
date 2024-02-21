const router = require('express').Router();
const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {
        res.render('index');
});


router.get('/running', (req, res) => {
        res.render('running');
});

module.exports = router;