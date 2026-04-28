const {leerTexto} = require('./reader');
const {limpiarYFiltrar} = require ('./utils');

function contarCaracteres (ruta) {
    const texto = leerTexto (ruta);

    if (texto === "Error de lectura"){
        console.log("No es posible analizar el texto");
        return 0;
    }

    return texto.length;
}



function contarPalabras(ruta) {
    const texto = leerTexto (ruta);

    if(texto === "Error de lectura") return 0;

    const palabrasLimpias = limpiarYFiltrar(texto);

    return palabrasLimpias.length;

}

module.exports = { 
    contarCaracteres,
    contarPalabras 

};




