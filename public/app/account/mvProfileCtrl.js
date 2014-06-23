angular.module('app').controller('mvProfileCtrl', function($scope, mvAuth, mvIdentity, msNotifier) {
  $scope.email = mvIdentity.currentUser.username;
  $scope.fname = mvIdentity.currentUser.firstName;
  $scope.lname = mvIdentity.currentUser.lastName;

  $scope.update = function() {
    var newUserData = {
      username: $scope.email,
      firstName: $scope.fname,
      lastName: $scope.lname
    };
    if($scope.password && $scope.password.length > 0) {
      newUserData.password = $scope.password;
    }

    mvAuth.updateCurrentUser(newUserData).then(function() {
      msNotifier.notify('Your user account has been updated');
    }, function(reason) {
      msNotifier.error(reason);
    });
  };
});