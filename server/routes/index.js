const express = require('express');
const router = express.Router();

//auth
const bcrypt = require('bcryptjs');
const passport = require('passport');


/******************
 * CONTACTS 
 ******************/

router.route('/contacts')
  .get((req, res) => {
    return new req.database.Contacts().fetchAll()
      .then((contacts) => {
        res.status(200);
        console.log(contacts);
        return res.json(contacts);
      }).catch(err => {
        console.log(err);
        res.sendStatus(500);
      })
  })

  .post((req, res) => {
    return new req.database.Contacts({
        name: req.body.name,
        email: req.body.email,
        mobile: req.body.mobile,
        work: req.body.work,
        home: req.body.home,
        twitter: req.body.twitter,
        instagram: req.body.instagram,
        github: req.body.github,
        created_by: req.body.created_by
      }).save()
      .then((contact) => {
        res.redirect('/api/contacts');
        return res.json({
          contact
        })
      })
  });

router.route('/contacts/:id')
  .get((req, res) => {
    console.log('HELLO??')
    Contacts.where({
        id: req.body.id
      }).fetchAll()
      .then((contact) => {
        contact = contact.model;
        return res.json({
          contact
        })
      })
  })
  .put((req, res) => {
    const body = req.body;
    new Contacts({
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
        contact = contact.model;
        return res.json({
          contact
        });
      })
  })

  .delete((req, res) => {
    new Contacts({
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
    id: req.body.id,
    username: req.body.username
  });
});



router.post('/logout', (req, res) => {
  req.logout();
  return res.json({
    success: true
  });
})



module.exports = router;
