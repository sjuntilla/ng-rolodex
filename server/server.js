const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./routes/index');

const PORT = process.env.port || 8080;

app.use(bodyParser.json());
app.use(express.static('../routes'));

// app.get('/api', routes);

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


app.listen(PORT, () => {
  console.log(`Server running on ${PORT}!!`);
})
