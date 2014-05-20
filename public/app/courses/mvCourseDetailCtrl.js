angular.module('app').controller('mvCourseDetailCtrl', function ($scope, mvCourse, $routeParams, mvIdentity, mvCourseModificator, mvNotifier, Restangular, mvCourseApplOfCourse) {
  $scope.course = mvCourse.get({_id: $routeParams.id});
  //get courseappl by course id
  //$scope.courseAppls = mvCourseAppl.get();
  // ok mam vsechny courseAppl, loopnout jima check id jestli je stejny jako course id kdyz jo pridat je to novyho scopu kterej loopnout a vypsat na jadestrance
  // popr rovnou najadestrance to vypsat z courseappl akorat pouzit nejakou podminku aby to ukazalo kurz jen kdyz je shodnej s soucasnym kurz detailem?


  $scope.signToCourse = function () {
    //user id z authuser vzit a courseId neboli title pro vytvoreni courseAppl mam k dispozici course kde vemu id, z authi injectnout vzit usera a pak udelat servis
    //pro create courseappl
    //osetrit pokud je user pokud ne redirect na login asi

    var userId = mvIdentity.currentUser._id;
    var courseId = $scope.course._id;

    console.log("user id = " + JSON.stringify(mvIdentity.currentUser, null, 4));
    console.log("course id = " + JSON.stringify($scope.course, null, 4));

    mvCourseModificator.signToCourse({userId: userId, courseId: courseId, signed: new Date()}).then(function () {
      mvNotifier.notify('Signed to ' + $scope.course.title);
    }, function (reason) {
      mvNotifier.error(reason);
    });
  }

  $scope.courseAppls = mvCourseApplOfCourse.showParticipants();


});