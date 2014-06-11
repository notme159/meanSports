angular.module('app').controller('mvCourseDetailCtrl', function ($scope, mvCourse, $routeParams, mvIdentity, mvCourseModificator, mvNotifier) {

  $scope.course = mvCourse.get({_id: $routeParams.id});

  $scope.signToCourse = function () {

    var userId = mvIdentity.currentUser._id;
    var courseId = $scope.course._id;

    //console.log("course id = " + JSON.stringify($scope.course, null, 4));

    mvCourseModificator.signToCourse({user: mvIdentity.currentUser, course: $scope.course, signed: new Date()}).then(function () {
      mvNotifier.notify('Signed to ' + $scope.course.title);
    }, function (reason) {
      mvNotifier.error(reason);
    });
  }

});