angular.module('app').controller('mvCourseDetailCtrl', function ($scope, mvCourse, $routeParams, mvIdentity, mvCourseModificator, msNotifier) {

  $scope.course = mvCourse.get({_id: $routeParams.id});

  $scope.signToCourse = function () {
    mvCourseModificator.signToCourse({user: mvIdentity.currentUser, course: $scope.course, signed: new Date()}).then(function () {
      msNotifier.notify('Signed to ' + $scope.course.title);
    }, function (reason) {
      msNotifier.error(reason);
    });
  };

  /*$scope.courseAppls = $http.get('/courses/%s/course-appls', $routeParams.id).success(function() {
   console.log("course appls in scope: " + JSON.stringify($scope.courseAppls));
   });*/
});