// let value\// let data
const request = require('request')
const weather = function(location ,callback){
    const access_key = 'd2c32ef63b406dd0764ce4585297a795' 
    const url = 'http://api.weatherstack.com/current?access_key=' + access_key + '&query=' + location + '&units='
        request({url, json: true }, (error, {body}) => {
            if(error){
                callback('Unable to connect to weather service!!!',undefined)
            } else if(body.error){
                callback('Unable to find location',undefined)
            } else{
                console.log(body)
                callback(undefined,body)
                // callback(undefined,body.location.name,body.current.wind_speed)
            }
    })
}
module.exports = weather
// module.exports = {
//     weather:weather
// }



// // let value
// let data
// const weather = function(place){
//     const access_key = 'd2c32ef63b406dd0764ce4585297a795' 
//     const request = require('request')
//     const url = 'http://api.weatherstack.com/current?access_key=' + access_key + '&query=' + place + '&units='
//     const value = request({url:url}, (req,res) => {
//                 data = JSON.parse(res.body)
//                 console.log(data)
//                 // const winddir = data.current.wind_dir
//                 // console.log("Wind Direction is ",data.current.wind_dir)
//                 // console.log("Temperature is ",data.current.temperature)
//                 // console.log("Wind Speed is ",data.current.wind_speed)
//                 // console.log("Humidity is ",data.current.humidity)
//                 // console.log("Temperature is ",data.current.temperature)
//     })
//     return data
// }
// module.exports = {
//     weather:weather
// }