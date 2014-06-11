/**
 * Created by Jan on 6/11/2014.
 */
angular.module('app').controller('mvCourseApplsCtrl', function($scope, mvCourseAppl) {
  $scope.courseAppls = mvCourseAppl.query();

    /*$scope.sortOptions = [{value:"title",text: "Sort by Title"},
      {value: "published",text: "Sort by Publish Date"}];
    $scope.sortOrder = $scope.sortOptions[0].value;*/
  });