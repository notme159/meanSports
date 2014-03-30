angular.module('app').factory('mvNoteModificator', function (mvNote, $q) {
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
    },

    deleteNote: function (id) {
      var newNote = new mvNote(id);
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
      var newNote = new mvNote(note);
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