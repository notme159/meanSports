angular.module('app').controller('msNoteDetailCtrl', function ($scope, $routeParams, msNote, msNotifier, msNoteModificator) {
  $scope.note = msNote.get({_id: $routeParams.id});

  $scope.deleteOldNote = function () {
    msNoteModificator.deleteNote({_id: $routeParams.id}).then(function () {
      msNotifier.notify('Note deleted');
    }, function (reason) {
      msNotifier.error(reason);
    });
  };
});