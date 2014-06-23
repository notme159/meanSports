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
  // todo musim delat new? zkus bez toho, vim ze to failnulo na save, ale..
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



/*CourseAppl.create(courseApplData, function (err, courseAppl) {
 if (err) {
 if (err.toString().indexOf('E11000') > -1) {
 err = new Error('Duplicate Sign Up!');
 }
 res.status(400);
 return res.send({reason: err.toString()});
 }
 res.send(courseAppl);
 });
 */

/*exports.getCourseApplsByCourseId = function (req, res, next) {

 var vysledek=[];

 CourseAppl.find({courseId: req.params.courseId}).exec(function (err, courseAppls) {

 //var courseApplsClone = _.clone(courseAppls);

 _.each(courseAppls, function (courseAppl, index, list) {
 //console.log(JSON.stringify(element));

 User.find({_id: courseAppl.userId}).exec(function (err, users) {
 //console.log(JSON.stringify(users[0]));
 //_.extend(courseApplsClone[index], users[0]);
 //users[0]['signed'] = element.signed;
 var userInfo = new Object();
 userInfo['userFirst'] = users[0].firstName;
 userInfo['lastName'] = users[0].lastName;
 userInfo['signed'] = courseAppl.signed;

 vysledek.push(userInfo);

 *//*var infoCompl = new Object();
 infoCompl.userFirst = users[0].firstName;
 infoCompl.userLast = users[0].lastName;
 infoCompl.signed = element.signed;

 info.push(vysledek);*//*


 //res.send(vysledek);
 if(courseAppls.length==index+1) {
 console.log('vysledek ' + JSON.stringify(vysledek));
 res.send(vysledek);
 }
 });

 });


 });

 };*/

