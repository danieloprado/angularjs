angular.module("app")

.service("sabespApi", function($http) {

  this.getInfo = function() {
    return $http.get("https://sabesp-api.herokuapp.com/v2");
  };

})

.factory("sabespApiV2", function($http) {

  function getInfo() {
    return $http.get("https://sabesp-api.herokuapp.com/v2");
  }

  return {
    getInfo: getInfo
  };

});