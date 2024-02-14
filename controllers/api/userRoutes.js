const router = require('express').Router();
const User = require('../../models/users');

router.get('/', async (req, res) => {
    res.status(200).json({ message: '/ working' });
})

module.exports = router;
