angular.module('app').controller('mvNoteListCtrl', function ($scope, mvNote, mvNoteModificator, msNotifier, $route) {
  $scope.notes = mvNote.query();
  console.log($scope.notes);
  $scope.deleteOldNote = function (id) {
    mvNoteModificator.deleteNote({_id: id}).then(function () {
      msNotifier.notify('Note deleted');
      $route.reload();
    }, function (reason) {
      msNotifier.error(reason);
    });
  };
  $scope.editOldNote = function (note) {
    mvNoteModificator.updateNote(note).then(function () {
      msNotifier.notify('Note updated');
      $route.reload();
    }, function (reason) {
      msNotifier.error(reason);
    });
  };
  $scope.createNewNote = function () {
    var newNoteData = {
      noteName: $scope.noteName,
      noteContent: $scope.noteContent
    };
    mvNoteModificator.createNote(newNoteData).then(function () {
      msNotifier.notify('Note created!');
    }, function (reason) {
      msNotifier.error(reason);
    });
    $route.reload();
  };
  $scope.cleanInputs = function () {
    $scope.noteName = '';
    $scope.noteContent = '';
  };
});