const router = require('express').Router();
const withAuth = require('../utils/auth');
const { User, Stats, Google } = require('../models');
const authenticateUser = require('../utils/authenticateUser');
require('../utils/googleAuth');
const passport = require('../utils/googleAuth');



router.get('/', async (req, res) => {
        res.render('index');
});


router.get('/running', authenticateUser, async (req, res) => {
        console.log('Redirected to /running');
        try {
                console.log('User:', req.user);

                let userId;
                console.log('authMethod', req.user.authMethod)

                if (req.user.authMethod === 'google') {
                        userId = req.user.googleId;
                } else {
                        userId = req.user.id;
                }
                console.log('UserId:', userId);

                let user;

                if (req.user.authMethod === 'google') {
                        user = await Google.findOne({ where: { googleId: req.user.googleId }, include: Stats });
                        console.log('TEST THIS ONE', user)
                } else {
                        user = await User.findByPk(userId, {
                                include: Stats,
                        });
                }

                console.log('authMethod', req.user.authMethod)

                if (!user) {
                        throw new Error('User not found');
                }


                console.log('User Data:', user);

                if (req.user.authMethod === 'google') {
                        const { firstName } = user;
                        console.log('first name check:', firstName);
                        const statsData = user.stats;
                        console.log('Stats data:', statsData);
                        
                        res.render('running', { firstName, statsData, loggedInWithGoogle: req.user.authMethod === 'google' });
                } else {
                        const { first_name } = user;
                        console.log('first name check:', first_name);
                       
                        const statsData = user.stats;
                        console.log('Stats data:', statsData);
                        res.render('running', { first_name, statsData, loggedInWithGoogle: req.user.authMethod === 'google' });
                }                
        } catch (error) {
                console.error('Error fetching stats:', error);
                res.status(500).send('Error fetching stats data');
        }        
});




router.get('/google/auth', 
    (req, res, next) => {
        console.log('Google authentication route hit');
        next(); 
    },
    passport.authenticate('google', { scope: ['email', 'profile'] })
);

router.get('/google/callback', passport.authenticate('google', {
                successRedirect: '/running',
                failureRedirect: '/auth/failure',
                authMethod: 'google'
}));

router.get('/auth/failure', (req, res) => {
        res.send('Google Authorization Failed. Please sign up with an email.')
});

module.exports = router;