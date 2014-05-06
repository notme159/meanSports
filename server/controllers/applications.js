/*
var Application = require('mongoose').model('Application');

exports.getApplications = function(req, res) {
  Application.find({}).exec(function(err, collection) {
    res.send(collection);
  });
};

exports.getApplicationById = function(req, res) {
  Application.findOne({_id: req.params.id}).exec(function(err, application) {
    res.send(application);
  });
};

exports.createApplication = function(req, res, next) {
  var applicationData = req.body;
  Application.create(applicationData, function (err, application) {
    if (err) {
      res.status(400);
      return res.send({reason: err.toString()});
    }
    res.send(application);
  });
};

*/
