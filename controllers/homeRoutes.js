const router = require('express').Router();
const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {
        res.render('index');
});


module.exports = router;