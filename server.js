const path = require('path');
const express = require('express');
const mysql = require("mysql")
const dotenv = require('dotenv')
const session = require('express-session');
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const passport = require('passport');
const User = require('./models');

require('./utils/googleAuth');

const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');
dotenv.config({ path: '.env'})

const app = express();
const PORT = process.env.PORT || 3001;

app.set('views', path.join(__dirname, 'views'));

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));
app.use(passport.initialize());
app.use(passport.session());

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening at http://localhost:${PORT}`));
});
