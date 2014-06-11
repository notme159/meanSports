angular.module('app').factory('mvCourseModificator', function (mvCourse, mvCourseAppl, $q, mvUser, mvIdentity, $http) {
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
      var dfd = $q.defer();
      var newCourseAppl = new mvCourseAppl({userParent: courseApplData.user._id, courseParent: courseApplData.course._id, signed: courseApplData.signed});
      newCourseAppl.$save().then(function (response) {
        dfd.resolve();
        }, function(response) {
          dfd.reject(response.data.reason);
        });
      return dfd.promise;
    }
  };
});