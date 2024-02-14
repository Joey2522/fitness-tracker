const router = require('express').Router();
const userRoutes = require('./userRoutes');
const statRoutes = require('./statRoutes');

router.use('/users', userRoutes);
router.use('/stats', statRoutes);

module.exports = router;