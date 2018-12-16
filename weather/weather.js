const request = require('request');

let getWeather = (lat, lng, callback)=>{
    request({
        url: `https://api.darksky.net/forecast/e4cd769ee2811c29ea903ed877cb4553/${lat},${lng}`,
        json: true
    }, (error, response, body)=>{
       if(!error && response.statusCode === 200){
           callback(undefined, {
               temperature:body.currently.temperature,
               apparentTemperature: body.currently.apparentTemperature
           })
           console.log();
       }else{
           callback('Unable to fetch the weather')
       }
    });
};

module.exports.getWeather = getWeather;

