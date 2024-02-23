const User = require('../models/users');

const authenticateUser = async (req, res, next) => {
    try {
        if (!req.session || !req.session.userId) {
            throw new Error('User not authenticated');
        }

        const user = await User.findByPk(req.session.userId);

        if (!user) {
            throw new Error('User not found');
        }

        req.user = user;

        next();
    } catch (error) {
        console.error('Authentication error:', error);
        res.status(401).json({ error: 'Authentication failed' });
    }
};

module.exports = authenticateUser;