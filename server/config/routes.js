var auth = require('./auth'),
  users = require('../controllers/users'),
  courses = require('../controllers/courses'),
  notes = require('../controllers/notes'),
  courseAppls = require('../controllers/courseAppls'),
  mongoose = require('mongoose'),
  User = mongoose.model('User');

module.exports = function(app) {

  app.get('/api/testing', testFunc);

  function testFunc(req, res) {
    res.send({test: "bro"});
  }

  app.get('/api/testing/:idtesting', testFuncSId);

  function testFuncSId(req, res) {
    res.send({testSId: req.params.idtesting});
  }

  app.get('/api/testing/:id/nono', testFuncSId);

  function testFuncSId(req, res) {
    res.send([{testSId: req.params.id}, {testSId2: req.params.id}]);
  }

  // users
  app.get('/api/users', auth.requiresRole('admin'), users.getUsers);
  app.post('/api/users', users.createUser);
  app.put('/api/users', users.updateUser);

  // courses
  app.get('/api/courses', courses.getCourses);
  app.get('/api/courses/:id', courses.getCourseById);
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