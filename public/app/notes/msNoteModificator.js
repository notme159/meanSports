angular.module('app').factory('msNoteModificator', function (msNote, $q) {
  return {
    createNote: function (newNoteData) {
      var newNote = new msNote(newNoteData);
      var dfd = $q.defer();
      newNote.$save().then(function () {
        dfd.resolve();
      }, function (response) {
        dfd.reject(response.data.reason);
      });
      return dfd.promise;
    },

    deleteNote: function (id) {
      var newNote = new msNote(id);
      console.log(newNote);
      var dfd = $q.defer();
      newNote.$delete(id).then(function () {
        dfd.resolve();
      }, function (response) {
        dfd.reject(response.data.reason);
      });
      return dfd.promise;
    },
    updateNote: function (note) {
      var newNote = new msNote(note);
      console.log(newNote);
      var dfd = $q.defer();
      newNote.$update(note).then(function () {
        dfd.resolve();
      }, function (response) {
        dfd.reject(response.data.reason);
      });
      return dfd.promise;
    }
  };
});