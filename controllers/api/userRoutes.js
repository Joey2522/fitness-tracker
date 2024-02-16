const router = require('express').Router();
const User = require('../../models/users');

router.get('/', async (req, res) => {
    try {
        const users = await User.findAll();

        if (!users || users.length === 0) {
            return res.status(404).json({ message: 'No users found' });
        }

        res.status(200).json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.post('/', async (req, res) => {
    try {
        const userData = req.body;

        const newUser = await User.create(userData);
        res.status(201).json({ message: 'User created successfully', data: newUser})
    } catch (error) {
        console.error('Error handling POST request', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});



module.exports = router;
