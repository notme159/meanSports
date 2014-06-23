angular.module('app').factory('msCourse', function ($resource) {
  return $resource('/api/courses/:_id', {_id: "@id"}, {
    update: {method: 'PUT', isArray: false}
  });
});