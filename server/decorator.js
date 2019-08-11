const User = require('./database/models/user_model');
const Contacts = require('./database/models/contact_model');

module.exports = (req, res, next) => {
  req.database = {
    User,
    Contacts
  };
  next();
};
