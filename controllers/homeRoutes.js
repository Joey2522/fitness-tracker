const router = require('express').Router();
const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {
<<<<<<< HEAD
        res.render('../../views/index.handlebars', { users });
});
=======
        res.render('homepage', { users });
});

module.exports = router;
>>>>>>> d4d0c958b51ff3b58df1f0429246c85ad2823d43
