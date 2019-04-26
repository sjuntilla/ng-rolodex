const bookshelf = require('./bookshelf');

const Contact = bookshelf.Model.extend({
  tableName: 'Contacts',
  idAttribute: 'id',
  hasTimestamps: true
})

module.exports = Contact;
