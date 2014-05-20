var mongoose = require('mongoose');

var courseApplSchema = mongoose.Schema({
  userId: {type: String, required: '{PATH} is required!'},
  courseId: {type:String, required:'{PATH} is required!'},
  signed: {type:Date, required:'{PATH} is required!'}
  //note: {type:String, required:'{PATH} is required!'}
});

var CourseAppl = mongoose.model('CourseAppl', courseApplSchema);

function createDefaultCourseAppls() {
  CourseAppl.find({}).exec(function(err, collection) {
    if(collection.length === 0) {
      /*CourseAppl.create({userId: 'jenna@gmail.com', courseId: 'Comedy intro', signed: new Date('11/20/2014')});
      CourseAppl.create({userId: 'joj@gmail.com', courseId: 'Comedy intro', signed: new Date('11/20/2014')});
      CourseAppl.create({userId: 'bob@gmail.com', courseId: 'Comedy intro', signed: new Date('11/20/2014')});
      CourseAppl.create({userId: 'penny@gmail.com', courseId: 'Comedy intro', signed: new Date('11/20/2014')});
      CourseAppl.create({userId: 'judy@gmail.com', courseId: 'Web Design', signed: new Date('11/20/2014')});
      CourseAppl.create({userId: 'elis@gmail.com', courseId: 'Web Design', signed: new Date('11/20/2014')});
      CourseAppl.create({userId: 'tony@gmail.com', courseId: 'Java for beginners', signed: new Date('11/20/2014')});*/
    }
  });
}

exports.createDefaultCourseAppls = createDefaultCourseAppls;