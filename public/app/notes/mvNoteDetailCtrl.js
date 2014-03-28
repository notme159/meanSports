angular.module('app').controller('mvNoteDetailCtrl', function($scope, mvNote, $routeParams) {
    $scope.note = mvNote.get({_id: $routeParams.id});
});