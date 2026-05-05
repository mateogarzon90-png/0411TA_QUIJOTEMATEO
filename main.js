const { leerTexto } = require('./reader');
const analyzer = require('./analyzer'); // Importamos todo el objeto analyzer

const rutaQuijote = './quijote.txt';

// 1. Lectura inicial y muestra parcial
const texto = leerTexto(rutaQuijote);
if (texto !== "Error de lectura") {
    console.log("--- Inicio del texto ---");
    console.log(texto.substring(0, 55));
    console.log("------------------------\n");
}

// 2. Análisis de caracteres y palabras totales
const totalCaract = analyzer.contarCaracteres(rutaQuijote);
console.log(`El Quijote tiene un total de ${totalCaract} caracteres.`);

const totalPalabras = analyzer.contarPalabras(rutaQuijote);
console.log(`El Quijote tiene ${totalPalabras} palabras.`);

// 3. Misiones específicas (Búsqueda y Promedio)
console.log("Menciones de Quijote:", analyzer.contarFrecuenciaPalabra(rutaQuijote, "quijote"));
console.log("Menciones de Sancho:", analyzer.contarFrecuenciaPalabra(rutaQuijote, "sancho"));

const media = analyzer.calcularLongitudMedia(rutaQuijote);
console.log(`Longitud media de palabras: ${media} caracteres.`);