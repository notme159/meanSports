angular.module('app').controller('mvNavBarLoginCtrl', function($scope, $http, mvIdentity, msNotifier, mvAuth, $location, $route) {
  $scope.identity = mvIdentity;
  $scope.signin = function(username, password) {
    if (username) {
      mvAuth.authenticateUser(username, password).then(function (success) {
        if (success) {
          msNotifier.notify('You have successfully signed in!');
        } else {
          msNotifier.error('Username/Password combination incorrect');
        }
      });
    }
  };

  $scope.signout = function() {
    mvAuth.logoutUser().then(function() {
      $scope.username = "";
      $scope.password = "";
      msNotifier.warning('You have successfully signed out!');
      $location.path('/');
      $scope.$apply();
      window.location.reload(true);
    });
  };
});