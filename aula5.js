// Calcular a area quadrado, recebendo valores peo teclado
var teclado = require("prompt-sync")();
var lUm = parseInt(teclado("Digite o valor do lado um: "));
var lDois = parseInt(teclado("Digite o valor do lado dois: "));
var area = (lUm * lDois);
console.log("A \u00E1rea do quadrado calculando ".concat(lUm, " x ").concat(lDois, " = ").concat(area));
