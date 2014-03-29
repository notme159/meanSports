var Note = require('mongoose').model('Note');

exports.getNotes = function(req, res) {
  Note.find({}).exec(function(err, collection) {
    res.send(collection);
  });
};

exports.getNoteById = function(req, res) {
  Note.findOne({_id: req.params.id}).exec(function(err, note) {
    res.send(note);
  });
};

exports.createNote = function(req, res, next) {
  var noteData = req.body;
  Note.create(noteData, function (err, note) {
    if (err) {
      res.status(400);
      return res.send({reason: err.toString()});
    }
    res.send(note);
  });
};

exports.deleteNote = function(req, res, next) {
  Note.remove({_id: req.params.id}, function (err, note) {
    if (err) {
      res.status(400);
      return res.send({reason: err.toString()});
    }
    res.send(true);
  });
};