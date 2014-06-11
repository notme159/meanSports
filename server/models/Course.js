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
      Course.create({title: 'Soccer for beginners', featured: true, published: new Date('1/1/2014'), tags: ['Ball game', 'Outdoors'], courseAppls: []});
      Course.create({title: 'Tennis for beginners', featured: false, published: new Date('1/15/2014'), tags: ['Outdoors'], courseAppls: []});
      Course.create({title: 'Advanced Squash', featured: false, published: new Date('1/25/2014'), tags: ['Indoors'], courseAppls: []});

      /*Course.create({title: 'Java for beginners', featured: false, published: new Date('12/15/2013'), tags: ['Java', 'Programming']});
      Course.create({title: 'JavaScript for Professionals', featured: true, published: new Date('1/13/2013'), tags: ['JS', 'web', 'Programming']});
      Course.create({title: 'Comedy intro', featured: false, published: new Date('1/1/2013'), tags: ['Acting', 'Comedy']});
      Course.create({title: 'Drama intro', featured: true, published: new Date('1/3/2014'), tags: ['Drama', 'Acting']});
      Course.create({title: 'Advanced Drama', featured: false, published: new Date('8/6/2014'), tags: ['Drama']});
      Course.create({title: 'C++ for beginners', featured: true, published: new Date('5/8/2014'), tags: ['C++', 'Programming']});
      Course.create({title: 'C fundamentals', featured: false, published: new Date('5/22/2014'), tags: ['C', 'Programming']});
      Course.create({title: 'Web Design', featured: true, published: new Date('5/13/2014'), tags: ['Bootstrap', 'Web']});
      Course.create({title: 'Ruby on Rails', featured: false, published: new Date('6/11/2014'), tags: ['Ruby', 'Programming']});*/
    }
  });
}

exports.createDefaultCourses = createDefaultCourses;