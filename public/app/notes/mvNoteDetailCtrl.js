angular.module('app').controller('mvNoteDetailCtrl', function ($scope, $routeParams, $location, mvNote, mvNotifier, mvNoteModificator) {
  $scope.note = mvNote.get({_id: $routeParams.id});

  $scope.deleteOldNote = function () {
    mvNoteModificator.deleteNote({_id: $routeParams.id}).then(function () {
      mvNotifier.notify('Note deleted');
    }, function (reason) {
      mvNotifier.error(reason);
    });
  };
});