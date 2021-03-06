var auth = require('./auth'),
  users = require('../controllers/users'),
  courses = require('../controllers/courses'),
  notes = require('../controllers/notes'),
  courseAppls = require('../controllers/courseAppls'),
  mongoose = require('mongoose'),
  User = mongoose.model('User');

module.exports = function(app) {
  // users
  app.get('/api/users', auth.requiresRole('admin'), users.getUsers);
  app.post('/api/users', users.createUser);
  app.put('/api/users', users.updateUser);

  // courses
  app.get('/api/courses', courses.getCourses);
  app.get('/api/courses/:id', courses.getCourseByCourseId);
  app.post('/api/courses', courses.createCourse);
  //app.put('/api/courses/:id', courses.updateCourse);
  app.delete('/api/courses/:id', courses.deleteCourse);

  // notes
  app.get('/api/notes', notes.getNotes);
  app.get('/api/notes/:id', notes.getNoteById);
  app.post('/api/notes', notes.createNote);
  app.delete('/api/notes/:id', notes.deleteNote);
  app.put('/api/notes/:id', notes.updateNote);

  // course application
  app.get('/api/course-appls', courseAppls.getCourseAppls);
  app.get('/api/course-appls/:id', courseAppls.getCourseApplById);
  app.post('/api/course-appls', courseAppls.createCourseAppl);
  app.get('/api/course/:id/course-appls', courses.getCourseApplsByCourseId);
  //app.get('/api/courses/:courseId/course-appls', courseAppls.getCourseApplsByCourseId);

  app.get('/partials/*', function(req, res) {
    res.render('../../public/app/' + req.params);
  });

  app.post('/login', auth.authenticate);

  app.post('/logout', function(req, res) {
    req.logout();
    res.end();
  });

  app.all('/api/*', function(req, res) {
    res.send(404);
  });

  app.get('*', function(req, res) {
    res.render('index', {
      bootstrappedUser: req.user
    });
  });
};