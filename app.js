const request = require('request');

request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=4%20real%20street%20manuyo%201%20las%20pinas&key=AIzaSyBQLjAvOYfn5Tjta6DqnDocKnGPr5-pO1U',
    json : true
}, (error, response, body)=>{
    console.log(body);
});