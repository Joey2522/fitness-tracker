const router = require('express').Router();
const User = require('../../models/users');
const bcrypt = require('bcrypt');

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

router.post('/signup', async (req, res) => {
    // console.error(error);
    console.log('/signup started');
    try {
        const { first_name, last_name, email, password } = req.body;
        console.log(first_name, last_name, email, password);

        const newUser = await User.create({
            first_name: first_name,
            last_name: last_name,
            email: email,
            password: password
        });
        console.log(newUser);
        res.status(201).json({ message: 'User created successfully', data: newUser});

    } catch (error) {
        console.error('Error handling POST request', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.post('/signin', async (req, res) => {
    try {
        const userData = await User.findOne({ where: { email: req.body.email } });

        console.log(userData.email);
        console.log(userData.password);

        if (!userData) {
            res.status(400).json({ message: 'Incorrect email or password, please try again' });
            return;
        }

        const validPassword = await bcrypt.compare(req.body.password, userData.password);

        if (!validPassword) {
            res.status(400).json({ message: 'Incorrect email of password, please try again' });
            return;
        }
    
        req.session.user = userData;
  
        req.session.user_id = userData.id;
  
        req.session.loggedIn = true;
    
        req.session.save(() => {
          
          res.render('running', { user: userData, message: 'You are now logged in!' });
        });
    
      } catch (err) {
        res.status(400).json(err);
      }

});



module.exports = router;
