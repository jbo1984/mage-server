'use strict';

function DebugController ($scope, UserService) {
  UserService.getAllUsers().
    success(function (users) {
      $scope.usersInFuture = _.filter(users, function(user) {
        return user.futureLocations && user.futureLocations.length > 0;
      });
    });
}