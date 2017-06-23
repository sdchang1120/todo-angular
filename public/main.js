var todoApp = angular.module("todoApp", []);
todoApp.controller("MainController", ["$scope", function($scope) {
  $scope.name = "Sharon";
  $scope.greet = "Hello, there " + $scope.name;
}]);
