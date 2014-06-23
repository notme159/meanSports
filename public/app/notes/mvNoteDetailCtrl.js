angular.module('app').controller('mvNoteDetailCtrl', function ($scope, $routeParams, mvNote, msNotifier, mvNoteModificator) {
  $scope.note = mvNote.get({_id: $routeParams.id});

  $scope.deleteOldNote = function () {
    mvNoteModificator.deleteNote({_id: $routeParams.id}).then(function () {
      msNotifier.notify('Note deleted');
    }, function (reason) {
      msNotifier.error(reason);
    });
  };
});