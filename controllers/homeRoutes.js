const router = require('express').Router();
const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {
        res.status(200).json({ message: '/ working' });
});

module.exports = router;