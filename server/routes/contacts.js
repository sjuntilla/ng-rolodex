const express = require('express');
const app = express();
const router = express.Router();
const Contact = require('../database/models/contact_model');

router.route('/')
  .get((req, res) => {
    Contact.fetchAll()
      .then(contacts => {
        console.log('CONTACTS:', contacts);
        return res.json(contacts);
      })
      .catch(() => {
        res.status(500).send('Error: Could not retrieve contacts.');
      });
  });

router.post('/', (req, res) => {
  Contact.forge({

  })
})
