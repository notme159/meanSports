angular.module('app').controller('msCourseApplDetailCtrl', function ($scope, $routeParams, msCourseAppl) {

  $scope.courseAppl = msCourseAppl.get({_id: $routeParams.id});

});