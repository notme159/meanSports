angular.module('app').factory('mvCourseAppl', function ($resource) {
  return $resource('/api/course-appls/:_id', {_id: "@id"}, {
    update: {method: 'PUT', isArray: false}
  });
});