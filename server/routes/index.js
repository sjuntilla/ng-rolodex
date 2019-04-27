const express = require('express');
const app = express();
const router = express.Router();

//auth
const bcrypt = require('bcryptjs');
const passport = require('passport');

//models
const Contact = require('../database/models/contact_model');
const User = require('../database/models/user_model');


/******************
 * CONTACTS 
 ******************/

router.route('/contacts')
  .get((req, res) => {
    Contact.where({
        created_by: req.user.id
      }).fetchAll()
      .then((contacts) => {
        contacts = contacts.models;
        return res.json(contacts);
      })
  })

  .post((req, res) => {
    const body = req.body;
    Contact.forge({
        name: body.name,
        email: body.email,
        mobile: body.mobile,
        work: body.work,
        home: body.home,
        twitter: body.twitter,
        instagram: body.instagram,
        github: body.github,
        created_by: body.created_by
      }).save(null, {
        method: 'insert'
      })
      .then((contact) => {
        return res.json({
          contact
        })
      })
  });

router.route('/contacts/:id')
  .put((req, res) => {
    const body = req.body;
    new Contact({
        id: req.params.id
      }).save({
        name: body.name,
        email: body.email,
        mobile: body.mobile,
        work: body.work,
        home: body.home,
        twitter: body.twitter,
        instagram: body.instagram,
        github: body.github,
        created_by: body.created_by
      }, {
        patch: true
      })
      .then((contact) => {
        return res.json({
          contact
        });
      })
  })

  .delete((req, res) => {
    new Contact({
      id: req.params.id
    }).destroy().then(() => {
      res.status(200);
      res.json({
        success: true
      });
    });
  });

/******************
 * LOGIN/AUTH 
 ******************/

router.post('/register', (req, res) => {
  User.where({
      username: req.body.username
    }).fetch()
    .then((existing) => {
      if (existing) {
        res.status(400);
        return res.json({
          success: false
        });
      }

      bcrypt.genSalt(12, (err, salt) => {
        if (err) {
          res.status(500);
          res.json({
            success: false
          });
        }
        bcrypt.hash(req.body.password, salt, (err, hash) => {
          if (err) {
            res.status(500);
            res.json({
              success: false
            })
          }

          return new User({
              username: req.body.username,
              password: hash,
              name: req.body.name,
              email: req.body.email,
              address: req.body.address
            })
            .save()
            .then((user) => {
              return res.json({
                success: true
              })
            })
            .catch((err) => {
              releaseEvents.status(500);
              return res.json({
                success: false
              })
            })
        })
      })
    })
})

router.post('/login', (req, res) => {
  return res.json({
    id: req.user.id,
    username: req.user.username
  });
});

router.post('/logout', (req, res) => {
  req.logout();
  return res.json({
    success: true
  });
})



module.exports = router;
