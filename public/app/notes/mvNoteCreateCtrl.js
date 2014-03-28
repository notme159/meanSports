angular.module('app').controller('mvNoteCreateCtrl', function ($scope, mvNoteCreator, mvNotifier, $location) {
  $scope.createNewNote = function () {
    var newNoteData = {
      noteName: $scope.noteName,
      noteContent: $scope.noteContent
    };

    mvNoteCreator.createNote(newNoteData).then(function () {
      mvNotifier.notify('Note created!');
      $location.path('/notes');
    }, function (reason) {
      mvNotifier.error(reason);
    });
  };

  $scope.cleanInputs = function () {
    $scope.noteName = '';
    $scope.noteContent = '';
  };
});