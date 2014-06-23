var Course = require('mongoose').model('Course');
var CourseAppl = require('mongoose').model('CourseAppl');

exports.getCourses = function (req, res) {
  Course.find({}).exec(function (err, collection) {
    res.send(collection);
  });
};

exports.getCourseByCourseId = function (req, res) {
  Course.findOne({_id: req.params.id}).exec(function (err, course) {
    res.send(course);
  });
};

exports.getCourseApplsByCourseId = function (req, res) {
  CourseAppl.find({courseParent: req.params.id})
    .exec(function (err, courseAndAppl) {
      if (err) {
      }
      console.log(JSON.stringify(courseAndAppl));
      res.send(courseAndAppl);
    });
};

exports.createCourse = function (req, res, next) {
  var courseData = req.body;
  Course.create(courseData, function (err, course) {
    if (err) {
      res.status(400); // bad req
      return res.send({reason: err.toString()});
    }
    res.send(course);
  });
};

exports.deleteCourse = function (req, res, next) {
  // todo, check jestli jsou courseAppls k tomu kurzu pred smazanim
};


