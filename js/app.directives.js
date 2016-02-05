angular.module("app")

.directive("clickDetalhe", function() {

  return {
    restrict: "AEC",
    scope: {
      data: "=item"
    },
    link: function(scope, elem, attrs) {
      console.log(scope, elem, attrs);

      elem = elem[0];
      elem.innerHTML += scope.data.name;

      // media_historica_do_mes: "238,3 mm"
      // pluviometria_acumulada_no_mes: "0,0 mm"
      // pluviometria_do_dia: "0,0 mm"
      // volume_armazenado: "81,2 %"

      elem.onclick = function() {
        var mensagem = "Media Historica do Mes: " + scope.data.data.media_historica_do_mes;
        mensagem += "\npluviometria do dia: " + scope.data.data.pluviometria_do_dia;

        alert(mensagem);
      };
    }
  };

});