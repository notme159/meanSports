angular.module('app').factory('msCourseModificator', function (msCourse, msCourseAppl, $q, msUser, msIdentity, $http) {
  return {
    createCourse: function (newCourseData) {
      var newCourse = new msCourse(newCourseData);
      var dfd = $q.defer();
      newCourse.$save().then(function () {
        dfd.resolve();
      }, function (response) {
        dfd.reject(response.data.reason);
      });
      return dfd.promise;
    },

    signToCourse: function (courseApplData) {
      var dfd = $q.defer();
      var newCourseAppl = new msCourseAppl({userParent: courseApplData.user._id, courseParent: courseApplData.course._id, signed: courseApplData.signed});
      newCourseAppl.$save().then(function (response) {
        dfd.resolve();
        }, function(response) {
          dfd.reject(response.data.reason);
        });
      return dfd.promise;
    }
  };
});