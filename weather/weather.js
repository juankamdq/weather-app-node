const axios = require('axios').default;


const getWeather = async(lat, lng) => {


    const instance = axios.create({
        baseURL: 'https://api.openweathermap.org/data/2.5/weather',
        params: {
            appid: '0c883e386cfbba255900f5bf36963149',
        }
    })


    const data = await instance.get(`?lat=${lat}&lon=${lng}&units=metric`);

    return data.data.main.temp;

}

module.exports = {
    getWeather
}