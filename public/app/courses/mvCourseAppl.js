angular.module('app').factory('mvCourseAppl', function ($resource) {
  var CourseApplResource = $resource('/api/course-appls/:_id', {_id: "@id"}, {
    update: {method: 'PUT', isArray: false}
  });
  return CourseApplResource;
});