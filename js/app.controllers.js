angular.module("app").controller("indexCtrl", function($scope, $http) {
  $scope.titulo = "Meu App";

  $http.get("https://sabesp-api.herokuapp.com/v2");

  $scope.comida = [
    {
      nome: "pizza",
      sabor: "mussarela"
    }, {
      nome: "lanche",
      sabor: "x-bacon"
    }, {
      nome: "coxinha",
      sabor: "flango com catupily"
    }
  ];

  $scope.adicionar = function(formComida) {
    if (formComida.$valid === false) {
      return;
    }

    $scope.comida.push($scope.novaComida);
    $scope.novaComida = {};
  };

  $scope.remover = function(index, comida) {
    var mensagem = "Deseja realmente remover " + comida.nome + "?";

    if (confirm(mensagem)) {
      $scope.comida.splice(index, 1);
    }
  };
});
