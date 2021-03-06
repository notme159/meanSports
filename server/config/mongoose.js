var mongoose = require('mongoose'),
  userModel = require('../models/User'),
  courseModel = require('../models/Course'),
  courseApplModel = require('../models/CourseAppl'),
  noteModel = require('../models/Note');

module.exports = function(config) {
  mongoose.connect(config.db);
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error...'));
  db.once('open', function callback() {
    console.log('azaltja db opened..');
  });

  userModel.createDefaultUsers();
  courseModel.createDefaultCourses();
  noteModel.createDefaultNotes();
  //courseApplModel.createDefaultCourseAppls();
};