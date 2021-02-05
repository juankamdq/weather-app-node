const axios = require('axios').default;

// async: A fuerza retorna una promesa, aunque retornemos datos sincronos
const getPlaceLatLng = async(direccion) => {


    // encodeURI = Codifica una cadena de texto como un identificador uniforme de recursos (URI) válido
    const encodeURL = encodeURI(direccion);



    //Configuracion inicial de la API
    const instance = axios.create({
        baseURL: `http://api.positionstack.com/v1/forward?access_key=72655f23bbced1ccd9be8d585a236753&query=${encodeURL}`,
        /* timeout: 1000, */
        //header: paso la llave de acceso. En otras Apis, como en este caso, es por params
        /*  header: {
             access_key: '72655f23bbced1ccd9be8d585a236753'
         }, */
    });



    const resp = await instance.get()

    if (resp.data.data.length === 0) {
        throw new Error('Error!! No se encontro ningun dato')
    }

    const data = resp.data.data[0]

    return {
        direccion: data.region,
        lat: data.latitude,
        lng: data.longitude
    }
}

module.exports = {
    getPlaceLatLng
}