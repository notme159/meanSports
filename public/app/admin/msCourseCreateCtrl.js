angular.module('app').controller('msCourseCreateCtrl', function ($scope, msNotifier, $route, msCourseModificator) {
  $scope.createNewCourse = function () {

    var featured;
    if ($scope.featured == undefined) {
      featured = false;
    } else {
      featured = true;
    }

    var newCourseData = {
      title: $scope.title,
      featured: featured,
      published: $scope.published,
      tags: $scope.tags
    };

    console.log(newCourseData);

    msCourseModificator.createCourse(newCourseData).then(function () {
      msNotifier.notify('Course created!');
    }, function (reason) {
      msNotifier.error(reason);
    });

    $route.reload();

  };

  $scope.cleanInputs = function () {
    $scope.title = '';
    $scope.tags = '';
    $scope.published = '';
  };
});