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


function contarFrecuenciaPalabra(ruta, palabraABuscar) {
    const texto = leerTexto(ruta);
    if (texto === "Error de lectura") return 0;

    const palabrasLimpias = limpiarYFiltrar(texto);
    
    // Filtramos el array para quedarnos solo con la palabra exacta
    // Usamos toLowerCase() por seguridad si utils no lo hizo ya
    const coincidencias = palabrasLimpias.filter(p => p.toLowerCase() === palabraABuscar.toLowerCase());
    
    return coincidencias.length;
}

function calcularLongitudMedia(ruta) {
    const texto = leerTexto(ruta);
    if (texto === "Error de lectura") return 0;

    const palabrasLimpias = limpiarYFiltrar(texto);
    if (palabrasLimpias.length === 0) return 0;

    // Sumamos la longitud de cada palabra usando reduce
    const sumaTotalLongitudes = palabrasLimpias.reduce((acumulado, palabra) => acumulado + palabra.length, 0);
    
    // Promedio = suma total / cantidad de elementos
    const promedio = sumaTotalLongitudes / palabrasLimpias.length;
    
    return promedio.toFixed(2); // Devolvemos 2 decimales para que quede limpio
}


module.exports = { 
    contarCaracteres,
    contarPalabras,
    contarFrecuenciaPalabra,
    calcularLongitudMedia
};