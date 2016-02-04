angular.module("app")

.filter("troca", function() {
  return function(valor) {
    if (valor !== undefined) {
      return valor
        .replace("a", "*")
        .replace("b", "-");
    }
  };
});