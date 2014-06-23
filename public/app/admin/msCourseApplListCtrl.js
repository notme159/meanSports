angular.module('app').controller('msCourseApplListCtrl', function ($scope, msCourseAppl) {

  $scope.courseAppls = msCourseAppl.query();

});