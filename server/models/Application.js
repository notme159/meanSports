/*
var mongoose = require('mongoose');

var applicationSchema = mongoose.Schema({
  title: {type:String, required:'{PATH} is required!'},
  userId: {type:String, required:'{PATH} is required!'},
  CourseId: {type:String, required:'{PATH} is required!'}
});
var Application = mongoose.model('Application', applicationSchema);

function createDefaultApplications() {
  Application.find({}).exec(function(err, collection) {
    if(collection.length === 0) {
      //Course.create({title: 'C# for advanced', featured: true, published: new Date('11/20/2013'), tags: ['C#']});

    }
  });
}

exports.createDefaultApplications = createDefaultApplications;*/
