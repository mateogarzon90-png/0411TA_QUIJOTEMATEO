const { leerTexto } = require('./reader');
const { contarCaracteres, contarPalabras } = require('./analyzer');


const texto = leerTexto('./quijote.txt');

console.log(texto.substring(0,55));

const total = contarCaracteres('./quijote.txt');
console.log(`El Quijote tiene un total de ${total} caracteres.`);


const palabrasLimpias = contarPalabras('./quijote.txt');
console.log(`El Quijote tiene ${palabrasLimpias} palabras.`)
