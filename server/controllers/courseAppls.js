var CourseAppl = require('mongoose').model('CourseAppl');
var User = require('mongoose').model('User');
var _ = require('underscore');

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
      if (err.toString().indexOf('E11000') > -1) {
        err = new Error('Duplicate Sign Up!');
      }
      res.status(400);
      return res.send({reason: err.toString()});
    }
    res.send(courseAppl);
  });
};

exports.getCourseApplsByCourseId = function (req, res, next) {

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

        /*var infoCompl = new Object();
         infoCompl.userFirst = users[0].firstName;
         infoCompl.userLast = users[0].lastName;
         infoCompl.signed = element.signed;

         info.push(vysledek);*/


        //res.send(vysledek);
        if(courseAppls.length==index+1) {
          console.log('vysledek ' + JSON.stringify(vysledek));
          res.send(vysledek);
        }
      });

    });


  });

}