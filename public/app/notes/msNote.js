angular.module('app').factory('msNote', function ($resource) {
  return $resource('/api/notes/:_id', {_id: "@id"}, {
    update: {method: 'PUT', isArray: false}
  });
});