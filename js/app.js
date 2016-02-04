var app = angular.module("app", []);

app.controller("indexCtrl", function($scope){
    $scope.titulo = "Meu App";
    
    $scope.comida = [{ 
        nome: "pizza",
        sabor: "mussarela"
    }, { 
        nome: "lanche",
        sabor: "x-bacon"
    },{ 
        nome: "coxinha",
        sabor: "flango com catupily"
    }];
    
    $scope.adicionar = function(formComida){
        if(formComida.$valid == false){
            return;
        }
        
        $scope.comida.push($scope.novaComida);
        $scope.novaComida = {};
    }
    
    $scope.remover = function(index, comida){
        var mensagem = "Deseja realmente remover " + comida.nome + "?";
        
        if(confirm(mensagem)){      
            $scope.comida.splice(index, 1);
        }
    }
});

app.filter("troca", function(){
   return function(valor){
       if(valor != undefined){
           return valor
                .replace("a", "*")
                .replace("b", "-");
       }
   }
});