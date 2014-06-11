angular.module('app').controller('mvCourseApplListCtrl', function($scope, mvCourseAppl) {

  $scope.courseAppls = mvCourseAppl.query();
  //$scope.$apply();

    /*$scope.sortOptions = [{value:"title",text: "Sort by Title"},
      {value: "published",text: "Sort by Publish Date"}];
    $scope.sortOrder = $scope.sortOptions[0].value;*/
  });