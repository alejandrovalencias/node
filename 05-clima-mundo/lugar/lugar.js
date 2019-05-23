const axios = require('axios');

const getLugarLating = async(direccion) => {
    const urlEncode = encodeURI(direccion);
    let urlApi = `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${urlEncode}`;

    const instance = axios.create({
        baseURL: urlApi,
        headers: {
            'X-RapidAPI-Host': 'devru-latitude-longitude-find-v1.p.rapidapi.com',
            'X-RapidAPI-Key': '02b2c1aef4msh9221bfd85ad46f3p193e26jsnc4bbaff90e8b'
        }
    });

    const respuesta = await instance.get();
    if (respuesta.data.Results.lenght === 0) {
        throw new Error(`No hay resultados para la ${direccion}`);
    }

    const data = respuesta.data.Results[0];

    return {
        direccion: direccion,
        lat: data.lat,
        lng: data.lon
    }
}

module.exports = {
    getLugarLating
};