angular.module('app').factory('mvNoteCreator', function (mvNote, $q) {
  return {
    createNote: function (newNoteData) {
      var newNote = new mvNote(newNoteData);
      var dfd = $q.defer();
      newNote.$save().then(function () {
        dfd.resolve();
      }, function (response) {
        dfd.reject(response.data.reason);
      });
      return dfd.promise;
    }
  };
});