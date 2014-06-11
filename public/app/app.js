angular.module('app', ['ngResource', 'ngRoute', 'restangular']);

angular.module('app').config(function ($routeProvider, $locationProvider) {
  var routeRoleChecks = {
    admin: {auth: function (mvAuth) {
      return mvAuth.authorizeCurrentUserForRoute('admin');
    }},
    user: {auth: function (mvAuth) {
      return mvAuth.authorizeAuthenticatedUserForRoute();
    }}
  };

  $locationProvider.html5Mode(true);
  $routeProvider
    .when('/', { templateUrl: '/partials/main/vMain',
      controller: 'mvMainCtrl'})
    .when('/admin/users', { templateUrl: '/partials/admin/vUser-list',
      controller: 'mvUserListCtrl', resolve: routeRoleChecks.admin
    }).when('/admin/addCourse', { templateUrl: '/partials/admin/vCourse-create',
      controller: 'mvCourseCreateCtrl', resolve: routeRoleChecks.admin
    })
    .when('/signup', { templateUrl: '/partials/account/vSignup',
      controller: 'mvSignupCtrl'
    })
    .when('/profile', { templateUrl: '/partials/account/vProfile',
      controller: 'mvProfileCtrl', resolve: routeRoleChecks.user
    })
    .when('/course-appls', {templateUrl: '/partials/account/vCourse-appl-list',
    controller: 'mvCourseApplListCtrl', resolve: routeRoleChecks.user
    })
    .when('/course-appls/:id', {templateUrl: '/partials/account/vCourse-appl-details',
      controller: 'mvCourseApplDetailCtrl', resolve: routeRoleChecks.user
    })
    .when('/courses', { templateUrl: '/partials/courses/vCourse-list',
      controller: 'mvCourseListCtrl'
    })
    .when('/courses/:id', { templateUrl: '/partials/courses/vCourse-details',
      controller: 'mvCourseDetailCtrl'
    })
    .when('/notes', { templateUrl: '/partials/notes/vNote-list',
      controller: 'mvNoteListCtrl'
    })
    .when('/notes/:id', { templateUrl: '/partials/notes/vNote-details',
      controller: 'mvNoteDetailCtrl'
    });
});

angular.module('app').run(function ($rootScope, $location) {
  $rootScope.$on('$routeChangeError', function (evt, current, previous, rejection) {
    if (rejection === 'not authorized') {
      $location.path('/');
    }
  });
});