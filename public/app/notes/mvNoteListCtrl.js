angular.module('app').controller('mvNoteListCtrl', function ($scope, mvNote, mvNoteModificator, mvNotifier, $route) {
  $scope.notes = mvNote.query();
  $scope.deleteOldNote = function (id) {
    mvNoteModificator.deleteNote({_id: id}).then(function () {
      mvNotifier.notify('Note deleted');
      $route.reload();
    }, function (reason) {
      mvNotifier.error(reason);
    });
  };
  $scope.editOldNote = function (note) {
    mvNoteModificator.updateNote(note).then(function () {
      mvNotifier.notify('Note updated');
      $route.reload();
    }, function (reason) {
      mvNotifier.error(reason);
    });
  };
});