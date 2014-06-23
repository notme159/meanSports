angular.module('app').controller('msNavBarLoginCtrl', function($scope, $http, msIdentity, msNotifier, msAuth, $location, $route) {
  $scope.identity = msIdentity;
  $scope.signin = function(username, password) {
    if (username) {
      msAuth.authenticateUser(username, password).then(function (success) {
        if (success) {
          msNotifier.notify('You have successfully signed in!');
        } else {
          msNotifier.error('Username/Password combination incorrect');
        }
      });
    }
  };

  $scope.signout = function() {
    msAuth.logoutUser().then(function() {
      $scope.username = "";
      $scope.password = "";
      msNotifier.warning('You have successfully signed out!');
      $location.path('/');
      $scope.$apply();
      window.location.reload(true);
    });
  };
});