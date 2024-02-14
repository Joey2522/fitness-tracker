const router = require('express').Router();
const Stats = require('../../models/stats');

router.get('/', async (req, res) => {
    res.status(200).json({ message: '/ working' });
})

module.exports = router;