function traducirAP(frase) {
    return frase.replace(/[aeiou]/gi, letra => letra + 'p' + letra.toLowerCase());
}

var frase = "Hola mundo";
var traduccion = traducirAP(frase);
console.log(traduccion);
