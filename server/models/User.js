var mongoose = require('mongoose'),
  encrypt = require('../utilities/encryption');

var userSchema = mongoose.Schema({
  firstName: {type: String, required: '{PATH} is required!'},
  lastName: {type: String, required: '{PATH} is required!'},
  username: {type: String, required: '{PATH} is required!', unique: true},
  salt: {type: String, required: '{PATH} is required!'},
  hashed_pwd: {type: String, required: '{PATH} is required!'},
  roles: [String]//,
  //courseAppls: [mongoose.Schema.Types.ObjectId]
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
      // aa - admin, qq, ww, ee - user
      var salt, hash;
      salt = encrypt.createSalt();
      hash = encrypt.hashPwd(salt, 'aa');
      User.create({firstName: 'John', lastName: 'Doe', username: 'aa', salt: salt, hashed_pwd: hash, roles: ['admin'], courseAppls: []});
      salt = encrypt.createSalt();
      hash = encrypt.hashPwd(salt, 'qq');
      User.create({firstName: 'Jenna', lastName: 'Sousa', username: 'qq', salt: salt, hashed_pwd: hash, roles: [], courseAppls: []});
      salt = encrypt.createSalt();
      hash = encrypt.hashPwd(salt, 'ww');
      User.create({firstName: 'Joj', lastName: 'Joice', username: 'ww', salt: salt, hashed_pwd: hash, roles: [], courseAppls: []});
      salt = encrypt.createSalt();
      hash = encrypt.hashPwd(salt, 'ee');
      User.create({firstName: 'Bob', lastName: 'Venica', username: 'ee', salt: salt, hashed_pwd: hash});
      /*
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
      hash = encrypt.hashPwd(salt, 'george');
      User.create({firstName: 'George', lastName: 'Duffle', username: 'george@gmail.com', salt: salt, hashed_pwd: hash});
      salt = encrypt.createSalt();
      hash = encrypt.hashPwd(salt, 'veronica');
      User.create({firstName: 'Veronica', lastName: 'Slatova', username: 'veronica@gmail.com', salt: salt, hashed_pwd: hash});*/
    }
  });
}

exports.createDefaultUsers = createDefaultUsers;