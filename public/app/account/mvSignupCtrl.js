angular.module('app').controller('mvSignupCtrl', function($scope, msNotifier, $location, mvAuth) {
  $scope.signup = function() {
    var newUserData = {
      username: $scope.email,
      password: $scope.password,
      firstName: $scope.fname,
      lastName: $scope.lname
    };

    mvAuth.createUser(newUserData).then(function() {
      msNotifier.notify('User account created!');
      $location.path('/');
    }, function(reason) {
      msNotifier.error(reason);
    });
  };
});