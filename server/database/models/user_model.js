const bookshelf = require('./bookshelf');

const User = bookshelf.Model.extend({
  tableName: 'Users',
  idAttribute: 'user_id',
  hasTimestamps: true
})

module.exports = User;
