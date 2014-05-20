/*
 angular.module('app').factory('mvCourseApplOfCourse', function ($resource) {
 return $resource('/api/courses/:courseId/course-appls', {courseId: "@courseId"}, {update: {method: 'PUT'}});
 });
 */

/*angular.module('app').factory('mvCourseApplOfCourse', function($resource){
 return $resource('/api/courses/:courseId',{}, {
 get: {
 method: 'GET',
 params:{
 courseId: '@courseId'
 }
 },
 'getFromCourse': {
 method:'GET',
 params: {
 courseId: '@courseId'
 },
 url: "/api/courses/:courseId/course-appls",
 isArray: true
 }
 })
 });*/


/*
 angular.module('app').factory('mvCourseApplOfCourse', ['Restangular', function (Restangular) {

 var restAngular =
 Restangular.withConfig(function (Configurer) {
 Configurer.setBaseUrl('/api');
 });


 var _courseService = restAngular.all('courses', ':courseId');

 return {
 getCourses: function () {
 return _courseService.getList('course-appls');
 }
 }
 }]);*/
angular.module('app').factory('mvCourseApplOfCourse', function (Restangular, $routeParams) {
  return {
    showParticipants: function () {
      var restAngular = Restangular.withConfig(function (Configurer) {
        Configurer.setBaseUrl('/api');
      });

      var _courseService = restAngular.one('courses', $routeParams.id);

      _courseService.getList('course-appls').then(function (courseAppls) {
        // courseId userId signed

        return courseAppls;

      });
      //console.log($scope.courseAppls);
    }
  }
});