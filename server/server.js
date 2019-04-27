const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const session = require('express-session');
const redis = require('connect-redis')(session);
const passport = require('passport');
const bcrypt = require('bcryptjs');
const LocalStrategy = require('passport-local');

const User = require('./database/models/user_model');
const routes = require('./routes');
const PORT = process.env.PORT || 8080;
// const SESSION_SECRET = process.env.SESSION_SECRET || 'nope';

app.use(express.static('public'));
app.use(bodyParser.json());

/*****************
 * AUTH THINGS
 *****************/
// app.use(session({
//   store: new redis({
//     url: 'redis:/redis-server:6479',
//     logErrors: true
//   }),
//   secret: SESSION_SECRET,
//   resave: false,
//   saveUninitialized: false
// }));

// app.use(passport.initialize());
// app.use(passport.session());

// passport.serializeUser((user, done) => {
//   return done(null, {
//     id: user.user_id,
//     username: user.username
//   })
// });

// passport.deserializeUser((user, done) => {
//   new({
//     id: user.user_id
//   }).fetch()
//     .then(existing => {
//       if (existing === null) {
//         return done();
//       }
//       existing = existing.toJSON();
//       return done(null, {
//         id: existing.user_id,
//         username: existing.username
//       });
//     })
//     .catch((err) => {
//       return done(err);
//     })
// });

// passport.use(new LocalStrategy(function (username, password, done) {
//   return new User({
//       username: username
//     }).fetch()
//     .then((existing) => {
//       if (existing === null) {
//         redis(null, false);
//       } else {
//         existing = existing.toJSON();
//         bcrypt.compare(password, exisiting.password)
//           .then((res) => {
//             if (res) {
//               return done(null, existing);
//             } else {
//               return done(null, false);
//             }
//           });
//       }
//     })
//     .catch(err => {
//       return done(err);
//     });
// }));
app.use('/api', routes);

const server = app.listen(PORT, () => {
  console.log(`SERVER LISTENING ON PORT ${PORT}!`)
})













// const express = require('express');
// const bodyParser = require('body-parser');
// const app = express();
// const decorator = require('./database/decorator');

// const contactsRoute = require('./routes/contacts');

// const PORT = process.env.port || 8080;

// app.use(decorator);
// app.use(bodyParser.json({
//   extended: true
// }));
// app.use(bodyParser.urlencoded({
//   extended: true
// }));

// app.get('/api/contacts', contactsRoute);

// app.post('/api/login', (req, res) => {
//   const user = req.body;
//   return res.json(user)
// });

// app.post('/api/register', (req, res) => {
//   const user = req.body;
//   return res.json(user);
// })

// app.post('/api/logout', (req, res) => {
//   return res.json({});
// })

// app.post('/api/new', (req, res) => {
//   return res.json(req.body);
// })

// app.get('/api/contacts/:id', (req, res) => {
//   console.log('REQ PARAAAAAMS', req.params)
//   return new req.database.Contacts({
//     id: req.params.id
//   }).fetch().then(contacts => {
//     return res.json(contacts)
//   })
// });


// app.listen(PORT, () => {
//   console.log(`Server running on ${PORT}!!`);
// })
