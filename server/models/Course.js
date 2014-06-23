var mongoose = require('mongoose');

var courseSchema = mongoose.Schema({
  title: {type: String, required: '{PATH} is required!', unique: true},
  featured: {type: Boolean, required: '{PATH} is required!'},
  published: {type: Date, required: '{PATH} is required!'},
  tags: [String],
  //courseAppls: [mongoose.Schema.Types.ObjectId]
  courseAppls: [{ type: mongoose.Schema.Types.ObjectId, ref: 'CourseAppl' }]
});

var Course = mongoose.model('Course', courseSchema);

function createDefaultCourses() {
  Course.find({}).exec(function (err, collection) {
    if (collection.length === 0) {
      Course.create({title: 'Soccer for beginners', featured: true, published: new Date('1/1/2014'), tags: ['Outdoors', 'Ball game'], courseAppls: []});
      Course.create({title: 'Tennis for beginners', featured: false, published: new Date('1/15/2014'), tags: ['Outdoors', 'Rocket'], courseAppls: []});
      Course.create({title: 'Advanced Squash', featured: false, published: new Date('1/25/2014'), tags: ['Indoors', 'Rocket'], courseAppls: []});
      Course.create({title: 'Advanced Swimming', featured: true, published: new Date('1/25/2014'), tags: ['Indoors', 'Water'], courseAppls: []});
      Course.create({title: 'Advanced Calisthenics', featured: false, published: new Date('1/25/2014'), tags: ['Indoors', 'No equipment'], courseAppls: []});
      Course.create({title: 'Calisthenics for beginners', featured: true, published: new Date('1/25/2014'), tags: ['Outdoors', 'No equipment'], courseAppls: []});

    }
  });
}

exports.createDefaultCourses = createDefaultCourses;