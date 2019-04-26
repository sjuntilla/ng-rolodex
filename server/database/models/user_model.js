const bookshelf = require('./bookshelf');

const User = bookshelf.Model.extend({
  tableName: 'Users',
  idAttribute: 'id',
  hasTimestamps: true
})

module.exports = User;
