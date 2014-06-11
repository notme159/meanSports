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
  /*var Tank = mongoose.model('Tank', yourSchema);

   var small = new Tank({ size: 'small' });
   small.save(function (err) {
   if (err) return handleError(err);
   // saved!
   })
   */

  var courseApplData = new CourseAppl(req.body); //courseId signed

  courseApplData.save(function(err,courseAppl){
    if (err) {
      console.log("courseAppl save error" + JSON.stringify(err));
      res.status=400;
      return res.send({reason: err.toString()});
    }
    res.send(courseAppl);

  });

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

};

exports.getCourseApplAndCourse = function(req,res,next){
  /*
   Story
   .findOne({ title: /Nintendo/i })
   .populate('_creator') // <--
   .exec(function (err, story) {
   if (err) ..
   console.log('The creator is %s', story._creator.name);
   // prints "The creator is Aaron"
   })
   */
  CourseAppl.findOne({_id: { "$oid" : "5398351ec3e400d01841878a"}})
    .populate(courseId)
    .exec(function(err,courseAppl){
      if(err){}
      console.log("getCourseApplAndCourse: " + JSON.stringify(courseAppl));
    })
}