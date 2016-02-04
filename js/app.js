angular.module("app", ['ngRoute'])

.config(function($routeProvider) {

  $routeProvider.when("/", {
    templateUrl: "home.html",
    controller: "homeCtrl"
  });

});