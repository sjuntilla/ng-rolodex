const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const decorator = require('./database/decorator');

const contactsRoute = require('./routes/contacts');

const PORT = process.env.port || 8080;

app.use(decorator);
app.use(bodyParser.json({
  extended: true
}));
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/api/contacts', contactsRoute);

app.post('/api/login', (req, res) => {
  const user = req.body;
  return res.json(user)
});

app.post('/api/register', (req, res) => {
  const user = req.body;
  return res.json(user);
})

app.post('/api/logout', (req, res) => {
  return res.json({});
})

app.post('/api/new', (req, res) => {
  return res.json(req.body);
})

app.get('/api/contacts/:id', (req, res) => {
  console.log('REQ PARAAAAAMS', req.params)
  return new req.database.Contacts({
    id: req.params.id
  }).fetch().then(contacts => {
    return res.json(contacts)
  })
});


app.listen(PORT, () => {
  console.log(`Server running on ${PORT}!!`);
})
