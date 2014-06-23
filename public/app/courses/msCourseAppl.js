angular.module('app').factory('msCourseAppl', function ($resource) {
  return $resource('/api/course-appls/:_id', {_id: "@id"}, {
    update: {method: 'PUT', isArray: false}
  });
});