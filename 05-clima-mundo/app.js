const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

/*lugar.getLugarLating(argv.direccion)
    .then(response => console.log(response))
    .catch(error => console.log(error));

clima.getClima(40.750000, -74.000000)
    .then(response => console.log(response))
    .catch(error => console.log(error));
*/

/*const getInfo = async(direccion) => {
    //Salida
    //El clima de xxxx es de xxx
    //No se puede determinar el climna
};*/

/*lugar.getLugarLating(argv.direccion).then(response => {
    return clima.getClima(response.lat, response.lng);
}).then(resp => {
    console.log(`El clima de ${argv.direccion} es de ${resp}`);
}).catch(error => console.log('No se puede determina el clima', error));*/

const getInfo = async(direccion) => {
    try {
        const coords = await lugar.getLugarLating(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);
        return `El clima de ${coords.direccion} es de ${temp}`;
    } catch (e) {
        return `No se pudo determinar el clima de ${coords.direccion}`;
    }
}

getInfo(argv.direccion).then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});