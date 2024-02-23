const router = require('express').Router();
const withAuth = require('../utils/auth');
const { User, Stats } = require('../models');
const authenticateUser = require('../utils/authenticateUser');


router.get('/', async (req, res) => {
        res.render('index');
});


router.get('/running', authenticateUser, async (req, res) => {
        console.log('Redirected to /running');
        try {
                const userId = req.user.id;

                console.log('userId:', userId);

                const userWithStats = await User.findByPk(userId, {
                        include: Stats,
                });

                console.log('Data:', userWithStats);

                if (userWithStats.stats) {
                        userWithStats.stats.forEach((stat) => {
                                console.log('Stats Data:', stat.dataValues);
                        });
                }

                if (!userWithStats) {
                        throw new Error('User not found');
                }

                
                const { first_name } = userWithStats;
                console.log('first name check:', first_name);

                const statsData = userWithStats.stats;

                console.log('Stats data:', statsData);

                res.render('running', { first_name, statsData });
                
        } catch (error) {
                console.error('Error fetching stats:', error);
                res.status(500).send('Error fetching stats data');
        }        
});

module.exports = router;