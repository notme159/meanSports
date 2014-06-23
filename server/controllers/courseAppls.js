var CourseAppl = require('mongoose').model('CourseAppl');
var User = require('mongoose').model('User');
//var _ = require('underscore');

// get all courseAppls and course parent
exports.getCourseAppls = function (req, res) {
  CourseAppl.find({})
    .populate("courseParent")
    .exec(function (err, courseAppls) {
    res.send(courseAppls);
  });
};

exports.createCourseAppl = function (req, res, next) {
  var courseAppl = new CourseAppl(req.body);
  courseAppl.save(function (err, courseAppl) {
    if (err) {
      res.status = 400; // bad req
      return res.send({reason: err.toString()});
    }
    res.send(courseAppl);
  });
}

// get courseAppl with course and user parents by courseApplId
exports.getCourseApplById = function (req, res, next) {
  CourseAppl.findOne({_id: req.params.id})
    .populate("courseParent")
    .populate("userParent")
    .exec(function (err, courseAppl) {
      if (err) {
      }
      console.log(JSON.stringify(courseAppl));
      res.send(courseAppl);
    })
};
