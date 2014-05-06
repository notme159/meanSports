var mongoose = require('mongoose');

var courseSchema = mongoose.Schema({
  title: {type:String, required:'{PATH} is required!'},
  featured: {type:Boolean, required:'{PATH} is required!'},
  published: {type:Date, required:'{PATH} is required!'},
  tags: [String]
});
var Course = mongoose.model('Course', courseSchema);

function createDefaultCourses() {
  Course.find({}).exec(function(err, collection) {
    if(collection.length === 0) {
      Course.create({title: 'C# for advanced', featured: true, published: new Date('11/20/2013'), tags: ['C#']});
      Course.create({title: 'Java for noobs', featured: true, published: new Date('12/15/2013'), tags: ['Java']});
      Course.create({title: 'JavaScript pr0s', featured: true, published: new Date('1/13/2013'), tags: ['JS', 'web']});
      Course.create({title: 'Comedy', featured: false, published: new Date('1/1/2013'), tags: ['Acting']});
      Course.create({title: 'Drama', featured: true, published: new Date('1/3/2014'), tags: ['Drama', 'Shae']});
    }
  });
}

exports.createDefaultCourses = createDefaultCourses;