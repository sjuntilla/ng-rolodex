const bookshelf = require('./bookshelf');
const User = require('./user_model');

class Contact extends bookshelf.Model {
  get tableName() {
    return 'contacts';
  };
  get hasTimestamps() {
    return true;
  }
}

// const Contact = bookshelf.Model.extend({
//   tableName: 'contacts',
//   idAttribute: 'id',
//   hasTimestamps: true
// })

module.exports = bookshelf.model('Contact', Contact);
