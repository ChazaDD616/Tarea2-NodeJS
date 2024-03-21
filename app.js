function traducirAP(frase) {
    return frase.replace(/[aeiou]/gi, letra => letra + 'p' + letra.toLowerCase());
}

var frase = "Hola cómo va";
var traduccion = traducirAP(frase);
console.log(traduccion);