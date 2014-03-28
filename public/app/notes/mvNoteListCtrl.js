angular.module('app').controller('mvNoteListCtrl', function($scope, mvNote) {
  $scope.notes = mvNote.query();
});