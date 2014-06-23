angular.module('app').controller('mvCourseApplDetailCtrl', function ($scope, $routeParams, mvCourseAppl) {

  $scope.courseAppl = mvCourseAppl.get({_id: $routeParams.id});

});