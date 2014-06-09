angular.module('app').factory('mvCourseModificator', function (mvCourse, mvCourseAppl, $q) {
  return {
    createCourse: function (newCourseData) {
      var newCourse = new mvCourse(newCourseData);
      var dfd = $q.defer();
      newCourse.$save().then(function () {
        dfd.resolve();
      }, function (response) {
        dfd.reject(response.data.reason);
      });
      return dfd.promise;
    },
    signToCourse: function (courseApplData) {
      // create courseappl
      // update user push to array courseappl
      // update course push to array courseappl
      var newCourseAppl = new mvCourseAppl(courseApplData);
      var dfd = $q.defer();
      newCourseAppl.$save().then(function () {
        dfd.resolve();
      }, function (response) {
        dfd.reject(response.data.reason);
      });
      return dfd.promise;

    }/*,

    deleteNote: function (id) {
      var newNote = new mvNote(id);
      console.log(newNote);
      var dfd = $q.defer();
      newNote.$delete(id).then(function () {
        dfd.resolve();
      }, function (response) {
        dfd.reject(response.data.reason);
      });
      return dfd.promise;
    },
    updateNote: function (note) {
      var newNote = new mvNote(note);
      console.log(newNote);
      var dfd = $q.defer();
      newNote.$update(note).then(function () {
        dfd.resolve();
      }, function (response) {
        dfd.reject(response.data.reason);
      });
      return dfd.promise;
    }*/
  };
});