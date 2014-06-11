angular.module('app').controller('mvCourseApplListCtrl', function($scope, mvCourseAppl) {

  $scope.courseAppls = mvCourseAppl.query();

  });