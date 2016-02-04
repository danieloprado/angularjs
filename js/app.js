angular.module("app", ['ngRoute'])

.config(function($routeProvider, $locationProvider) {

  // $locationProvider.html5Mode({
  //   enabled: true,
  //   requireBase: false
  // });

  $routeProvider.when("/", {
      templateUrl: "home.html",
      controller: "homeCtrl"
    })
    .when("/sabesp", {
      templateUrl: "sabesp.html",
      controller: "sabespCtrl"
    })
    .when("/comida", {
      templateUrl: "comida.html",
      controller: "comidaCtrl"
    })
    .otherwise("/");
});