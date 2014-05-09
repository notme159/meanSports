var CourseAppl = require('mongoose').model('CourseAppl');

exports.getCourseAppls = function (req, res) {
  CourseAppl.find({}).exec(function (err, collection) {
    res.send(collection);
  });
};

exports.getCourseApplById = function (req, res) {
  CourseAppl.findOne({courseId: req.params.id}).exec(function (err, courseAppl) {
    res.send(courseAppl);
  });
};

exports.createCourseAppl = function (req, res, next) {
  var courseApplData = req.body;
  CourseAppl.create(courseApplData, function (err, courseAppl) {
    if (err) {
      res.status(400);
      return res.send({reason: err.toString()});
    }
    res.send(courseAppl);
  });
};

exports.getCourseApplsByCourse = function (req, res, next) {
  CourseAppl.find({courseId: res.body.courseId}).exec(function (err, collection) {
    res.send(collection);
  });
}