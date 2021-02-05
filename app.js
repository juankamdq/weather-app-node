const places = require('./place/places')
const weather = require('./weather/weather')

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        demandOption: true,
        desc: 'Ciudad a buscar'
    }
}).argv;




const getInfo = async(direccion) => {

    try {
        const coord = await places.getPlaceLatLng(direccion);
        const wheat = await weather.getWeather(coord.lat, coord.lng);

        return `La temperatura de ${direccion} es de ${wheat}`;
    } catch (err) {
        console.log(err);
        /* console.log(`No se ha podido encontrar la temperatura para ${direccion}`) */
    }

};


getInfo(argv.direccion)
    .then(res => {
        console.log(res);
    });