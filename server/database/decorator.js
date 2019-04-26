const User = require('./models/user_model');
const Contacts = require('./models/contact_model');

module.exports = (req, res, next) => {
  req.database = {
    User,
    Contacts
  };
  next();
};
