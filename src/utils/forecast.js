const request = require('request');

const forecast = (lat, lon, callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=284c74e80f093ba720730a63a9e436b3&query=' + lat + ',' + lon;
    
    request( { url, json: true} , (error, {body}) => {

        if(error) {
            callback('Unable to connect to server', undefined);
        } else if(body.error) {
            callback('Unable to find coordinates', undefined);
        } else{
            callback(undefined,
                body.current.weather_descriptions[0] +
                '. It is currently ' + body.current.temperature +
                ', it feels like ' + body.current.feelslike +
                ', there is ' +  body.current.precip + '% of precipitation'
            );
        }
    })
    

}



module.exports = forecast