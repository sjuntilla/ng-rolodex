const bookshelf = require('./bookshelf');

const Contact = bookshelf.Model.extend({
  tableName: 'contacts',
  idAttribute: 'id',
  hasTimestamps: true
})

module.exports = Contact;
