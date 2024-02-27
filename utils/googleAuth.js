const passport = require('passport');
const Google = require('../models/google');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
require('dotenv').config();

passport.use(new GoogleStrategy({
    clientID:     process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "https://run-tracker-aa4292a38872.herokuapp.com/google/callback",
    passReqToCallback   : true
  },
  async function(request, accessToken, refreshToken, profile, done) {
    try {

        const authMethod = 'google';
        console.log(authMethod);
        const userData = {
            googleId: profile.id,
            firstName: profile.name.givenName,
            lastName: profile.name.familyName,
            email: profile.email,
            authMethod: authMethod
        };
        console.log(userData);

        let user = await Google.findOne({ where: { googleId: profile.id } });
    
        console.log('User', user);

        if (!user) {
            user = await Google.create(
                userData
            );
            console.log('CREATED USER', user);
        }    

        return done(null, user);
        
    } catch (error) {
        return done(error, null);
    }
  }
));

passport.serializeUser(function(user, done) {
    console.log(user.googleId)
    done(null, user.googleId);
});

passport.deserializeUser(function(googleId, done) {
    Google.findByPk(googleId)
        .then(user => {
            done(null, user);
        })
        .catch(err => {
            done(err, null);
        });

});

module.exports = passport;





    // User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //   return done(err, user);
    // });