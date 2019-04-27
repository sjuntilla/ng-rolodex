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
    const newCard = req.body;
    Contact.forge({
        name: newCard.name,
        email: newCard.email,
        mobile: newCard.mobile,
        work: newCard.work,
        home: newCard.home,
        twitter: newCard.twitter,
        instagram: newCard.instagram,
        github: newCard.github,
        created_by: newCard.created_by
      }).save(null, {
        method: 'insert'
      })
      .then((contact) => {
        return res.json(
          contact
        )
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



module.exports = router;
