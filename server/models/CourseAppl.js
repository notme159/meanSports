var mongoose = require('mongoose');

var courseApplSchema = mongoose.Schema({
  userParent: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  //courseId: {type: mongoose.Schema.Types.ObjectId, required: '{PATH} is required!'},
  courseParent: {type: mongoose.Schema.Types.ObjectId, ref: 'Course'},
  signed: {type: Date, required: '{PATH} is required!', default: Date.now},
  paidFrom: Date,
  paidTo: Date,
  price: Number
});

var CourseAppl = mongoose.model('CourseAppl', courseApplSchema);

function createDefaultCourseAppls() {
  CourseAppl.find({}).exec(function (err, collection) {
    if (collection.length === 0) {
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