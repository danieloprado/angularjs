var app = angular.module("app", []);

app.controller("appCtrl", function($scope) {
  $scope.title = "Meu primeiro angular";
  $scope.date = new Date();
  $scope.cost = 5.6;
});
