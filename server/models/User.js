var mongoose = require('mongoose'),
  encrypt = require('../utilities/encryption');

var userSchema = mongoose.Schema({
  firstName: {type: String, required: '{PATH} is required!'},
  lastName: {type: String, required: '{PATH} is required!'},
  username: {type: String, required: '{PATH} is required!', unique: true},
  salt: {type: String, required: '{PATH} is required!'},
  hashed_pwd: {type: String, required: '{PATH} is required!'},
  roles: [String]
});
userSchema.methods = {
  authenticate: function (passwordToMatch) {
    return encrypt.hashPwd(this.salt, passwordToMatch) === this.hashed_pwd;
  },
  hasRole: function (role) {
    return this.roles.indexOf(role) > -1;
  }
};
var User = mongoose.model('User', userSchema);

function createDefaultUsers() {
  User.find({}).exec(function (err, collection) {
    if (collection.length === 0) {
      var salt, hash;
      salt = encrypt.createSalt();
      hash = encrypt.hashPwd(salt, 'aa');
      User.create({firstName: 'John', lastName: 'Doe', username: 'aa', salt: salt, hashed_pwd: hash, roles: ['admin']});
      salt = encrypt.createSalt();
      hash = encrypt.hashPwd(salt, 'jenna');
      User.create({firstName: 'Jenna', lastName: 'Sousa', username: 'jenna@gmail.com', salt: salt, hashed_pwd: hash, roles: []});
      salt = encrypt.createSalt();
      hash = encrypt.hashPwd(salt, 'joj');
      User.create({firstName: 'Joj', lastName: 'Koll', username: 'joj@gmail.com', salt: salt, hashed_pwd: hash});
      salt = encrypt.createSalt();
      hash = encrypt.hashPwd(salt, 'bob');
      User.create({firstName: 'Bob', lastName: 'Venica', username: 'bob@gmail.com', salt: salt, hashed_pwd: hash});
      salt = encrypt.createSalt();
      hash = encrypt.hashPwd(salt, 'penny');
      User.create({firstName: 'Penny', lastName: 'Lordo', username: 'penny@gmail.com', salt: salt, hashed_pwd: hash});
      salt = encrypt.createSalt();
      hash = encrypt.hashPwd(salt, 'judy');
      User.create({firstName: 'Judy', lastName: 'Sicera', username: 'judy@gmail.com', salt: salt, hashed_pwd: hash});
      salt = encrypt.createSalt();
      hash = encrypt.hashPwd(salt, 'elis');
      User.create({firstName: 'Elis', lastName: 'Toposa', username: 'elis@gmail.com', salt: salt, hashed_pwd: hash});
      salt = encrypt.createSalt();
      hash = encrypt.hashPwd(salt, 'tony');
      User.create({firstName: 'Tony', lastName: 'Holler', username: 'tony@gmail.com', salt: salt, hashed_pwd: hash});
      salt = encrypt.createSalt();
      hash = encrypt.hashPwd(salt, 'bro');
      User.create({firstName: 'George', lastName: 'Duffle', username: 'bro', salt: salt, hashed_pwd: hash});
      salt = encrypt.createSalt();
      hash = encrypt.hashPwd(salt, 'veronica');
      User.create({firstName: 'Veronica', lastName: 'Slatova', username: 'veronica@gmail.com', salt: salt, hashed_pwd: hash});
    }
  });
}

exports.createDefaultUsers = createDefaultUsers;