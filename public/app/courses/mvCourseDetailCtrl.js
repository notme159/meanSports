angular.module('app').controller('mvCourseDetailCtrl', function ($scope, mvCourse, $routeParams, mvIdentity, mvCourseModificator, mvNotifier, $http) {

  $scope.course = mvCourse.get({_id: $routeParams.id});

  $scope.signToCourse = function () {
    mvCourseModificator.signToCourse({user: mvIdentity.currentUser, course: $scope.course, signed: new Date()}).then(function () {
      mvNotifier.notify('Signed to ' + $scope.course.title);
    }, function (reason) {
      mvNotifier.error(reason);
    });
  };

  /*$scope.courseAppls = $http.get('/courses/%s/course-appls', $routeParams.id).success(function() {
   console.log("course appls in scope: " + JSON.stringify($scope.courseAppls));
   });*/
});