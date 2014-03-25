var Note = require('mongoose').model('Note');

exports.getNotes = function(req, res) {
  Note.find({}).exec(function(err, collection) {
    res.send(collection);
  });
};

exports.getNodeById = function(req, res) {
  Note.findOne({_id:req.params.id}).exec(function(err, note) {
    res.send(note);
  });
};