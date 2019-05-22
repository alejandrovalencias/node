//require
const fs = require('fs'); //paquete que viene en node 

let crearArchivo = (base) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`La base ${base} no es un número`);
            return;
        }

        let data = '';
        for (let i = 1; i <= 9; i++) {
            data += `${base} * ${i} = ${base*i} \n`;
        }

        //Guardar en archivo contenido
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (error) => {
            if (error) {
                reject(error)
            } else {
                resolve(`tabla-${base}.txt`);
            }
        });
    });
}

module.exports = {
    crearArchivo
}