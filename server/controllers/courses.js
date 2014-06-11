var Course = require('mongoose').model('Course');

exports.getCourses = function(req, res) {
  Course.find({}).exec(function(err, collection) {
    res.send(collection);
  });
};

exports.getCourseById = function(req, res) {
  Course.findOne({_id: req.params.id}).exec(function(err, course) {
    res.send(course);
  });
};

exports.createCourse = function(req, res, next) {
    var courseData = req.body;
    Course.create(courseData, function (err, course) {
        if (err) {
            res.status(400);
            return res.send({reason: err.toString()});
        }
        res.send(course);
    });
};
/*
exports.updateCourse = function(req, res, next) {
  console.log(":::::::::" + JSON.stringify(req.body.courseAppls));
  Course.update({_id: req.params.id}, {$push: {courseAppls: new ObjectId(req.body.courseAppls[0])}}, function (err, note) {
    // id soccer course push id courseAppl posledni co sem vytvoril
    // db.courses.update({_id: ObjectId("5392e697ce1c9e6c2336fa12")}, {$push: {courseAppls: ObjectId("5397223d4eade954232ce6d2")}})
    if (err) {
      res.status(400);
      return res.send({reason: err.toString()});
    }
    res.send(true);
  });
};*/

exports.deleteCourse = function(req,res,next){
  // todo
};


