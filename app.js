const yargs   = require('yargs');
const request = require('request');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const argv = yargs
            .options({
                a: {
                    demand: true,
                    alias: 'address',
                    describe: 'Address to fetch weather for',
                    string: true
                }
             })
             .help()
             .alias('help', 'h')
             .argv;


geocode.geocodeAddress(argv.address, (errMessage, result)=>{
 if(errMessage){
     console.log(errMessage);
 }else{
     weather.getWeather(result.latitude, result.longtitude, (err, weatherResult)=>{
        if(err){
            console.log(err);
        }else{
            console.log(JSON.stringify(weatherResult, undefined, 2));
        }
     });
    }
});


