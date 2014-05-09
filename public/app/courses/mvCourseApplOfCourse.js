/*angular.module('app').factory('mvCourseApplOfCourse', function ($resource) {
  return $resource('/courses/:id', {}, {
    get: {
      method: 'GET',
      params: {
        courseId: '@courseId'
      }
    },
    'getFromCourse': {
      method: 'GET',
      params: {
        courseId: '@courseId'
      },
      url: "http://localhost:3030/api" + "/courses/:courseId/course-appls",
      isArray: true
    }
  })
});*/



angular.module('app').factory('mvCourseApplOfCourse', function ($resource) {
  return $resource('/api/courses/:courseId/course-appls', {courseId: "@courseId"}, {update: {method: 'PUT'}});
});
