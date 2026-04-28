// function limpiarYFiltrar(texto) {
//     const palabras = texto.toLowerCase()
//         .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
//         .split(/\s+/);

//     const ignorar = ["el", "la", "de", "que", "y", "a", "en", "un", "con", "los", "las"]

//     return palabras.filter(palabra => palabra.lenght > 0 && !ignorar.includes(palabra) )

// }

// module.exports = { limpiarYFiltrar  };

function limpiarYFiltrar(texto) {
    
    const textoLimpio = texto.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");

    const todasLasPalabras = textoLimpio.split(/\s+/);

    const ignorar = ["el", "la", "de", "que", "y", "a", "en", "un", "con", "los", "las", "del"];

    const resultado = todasLasPalabras.filter(palabra => {
        const noEstaVacia = palabra.length > 0;
        const noEsIgnorada = !ignorar.includes(palabra);
        return noEstaVacia && noEsIgnorada;
    });

    return resultado;
}

module.exports = { limpiarYFiltrar };



function obtenerFrecuencia(palabras) {
    const frecuencia = {};
    palabras.forEach(palabra => {
        if (frecuencia[palabra]) {
            frecuencia[palabra]++;
        } else {
            frecuencia[palabra] = 1;
        }
    });

    const ranking = Object.entries(frecuencia);

    ranking.sort((a, b) => b[1] - a[1]);

    return ranking.slice(0, 10);
}

module.exports = { limpiarYFiltrar, obtenerFrecuencia };