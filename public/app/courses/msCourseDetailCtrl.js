angular.module('app').controller('msCourseDetailCtrl', function ($scope, msCourse, $routeParams, msIdentity, msCourseModificator, msNotifier) {

  $scope.course = msCourse.get({_id: $routeParams.id});

  $scope.signToCourse = function () {
    msCourseModificator.signToCourse({user: msIdentity.currentUser, course: $scope.course, signed: new Date()}).then(function () {
      msNotifier.notify('Signed to ' + $scope.course.title);
    }, function (reason) {
      msNotifier.error(reason);
    });
  };

});