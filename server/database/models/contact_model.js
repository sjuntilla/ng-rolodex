const bookshelf = require('./bookshelf');
const User = require('./user_model');

const Contact = bookshelf.Model.extend({
  tableName: 'contacts',
  idAttribute: 'id',
  hasTimestamps: true
})

module.exports = Contact;
