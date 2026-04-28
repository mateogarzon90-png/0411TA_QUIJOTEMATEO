const fs = require('fs');

function leerTexto (path) {
    try{
        const contenido = fs.readFileSync(path, 'utf-8');
        return contenido;
    } catch (error) {
        return "Error de lectura" 
    }
}

module.exports = { leerTexto };

