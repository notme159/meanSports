angular.module('app').controller('msNoteListCtrl', function ($scope, msNote, msNoteModificator, msNotifier, $route) {
  $scope.notes = msNote.query();
  console.log($scope.notes);
  $scope.deleteOldNote = function (id) {
    msNoteModificator.deleteNote({_id: id}).then(function () {
      msNotifier.notify('Note deleted');
      $route.reload();
    }, function (reason) {
      msNotifier.error(reason);
    });
  };
  $scope.editOldNote = function (note) {
    msNoteModificator.updateNote(note).then(function () {
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
    msNoteModificator.createNote(newNoteData).then(function () {
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