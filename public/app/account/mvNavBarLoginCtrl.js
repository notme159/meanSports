angular.module('app').controller('mvNavBarLoginCtrl', function($scope, $http, mvIdentity, mvNotifier, mvAuth, $location, $route) {
  $scope.identity = mvIdentity;
  $scope.signin = function(username, password) {
    mvAuth.authenticateUser(username, password).then(function(success) {
      if(success) {
        mvNotifier.notify('You have successfully signed in!');
      } else {
        mvNotifier.error('Username/Password combination incorrect');
      }
    });
  };

  $scope.signout = function() {
    mvAuth.logoutUser().then(function() {
      $scope.username = "";
      $scope.password = "";
      mvNotifier.warning('You have successfully signed out!');
      $location.path('/');
      $scope.$apply();
      window.location.reload(true);
    });
  };
});