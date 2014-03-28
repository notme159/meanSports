angular.module('app').factory('mvNote', function ($resource) {
  var NoteResource = $resource('/api/notes/:_id', {_id: "@id"}, {
    update: {method: 'PUT', isArray: false}
  });
  return NoteResource;
});
