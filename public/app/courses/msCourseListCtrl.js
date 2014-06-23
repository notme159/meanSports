angular.module('app').controller('msCourseListCtrl', function($scope, msCourse) {

  $scope.courses = msCourse.query();

  $scope.sortOptions = [{value:"title",text: "Sort by Title"},
    {value: "published",text: "Sort by Publish Date"}];
  $scope.sortOrder = $scope.sortOptions[0].value;
});