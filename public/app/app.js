angular.module('app', ['ngResource', 'ngRoute', 'restangular']);

angular.module('app').config(function ($routeProvider, $locationProvider) {
  var routeRoleChecks = {
    admin: {auth: function (msAuth) {
      return msAuth.authorizeCurrentUserForRoute('admin');
    }},
    user: {auth: function (msAuth) {
      return msAuth.authorizeAuthenticatedUserForRoute();
    }}
  };

  $locationProvider.html5Mode(true);
  $routeProvider
    .when('/', { templateUrl: '/partials/main/vMain',
      controller: 'msMainCtrl'})
    .when('/admin/users', { templateUrl: '/partials/admin/vUser-list',
      controller: 'msUserListCtrl', resolve: routeRoleChecks.admin
    }).when('/admin/addCourse', { templateUrl: '/partials/admin/vCourse-create',
      controller: 'msCourseCreateCtrl', resolve: routeRoleChecks.admin
    }).when('/admin/course-appls', { templateUrl: '/partials/admin/vCourse-appl-list',
      controller: 'msCourseApplListCtrl', resolve: routeRoleChecks.admin
    }).when('/admin/course-appls/:id', { templateUrl: '/partials/admin/vCourse-appl-details',
      controller: 'msCourseApplDetailCtrl', resolve: routeRoleChecks.admin
    })
    .when('/signup', { templateUrl: '/partials/account/vSignup',
      controller: 'msSignupCtrl'
    })
    .when('/profile', { templateUrl: '/partials/account/vProfile',
      controller: 'msProfileCtrl', resolve: routeRoleChecks.user
    })
    .when('/courses', { templateUrl: '/partials/courses/vCourse-list',
      controller: 'msCourseListCtrl'
    })
    .when('/courses/:id', { templateUrl: '/partials/courses/vCourse-details',
      controller: 'msCourseDetailCtrl'
    })
    .when('/notes', { templateUrl: '/partials/notes/vNote-list',
      controller: 'msNoteListCtrl'
    })
    .when('/notes/:id', { templateUrl: '/partials/notes/vNote-details',
      controller: 'msNoteDetailCtrl'
    });
})
;

angular.module('app').run(function ($rootScope, $location) {
  $rootScope.$on('$routeChangeError', function (evt, current, previous, rejection) {
    if (rejection === 'not authorized') {
      $location.path('/');
    }
  });
});