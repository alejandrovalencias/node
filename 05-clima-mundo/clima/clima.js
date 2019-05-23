const axios = require('axios');

const getClima = async(lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=5050e931fb63ed263c67e1293bceeb49&units=metric`;
    const respuesta = await axios.get(url);
    return respuesta.data.main.temp;
}

module.exports = {
    getClima
};