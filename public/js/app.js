// const { response } = require("express")
console.log('Client side JS file loaded')
const weatherform = document.querySelector('form')
const search = document.querySelector('input')
const msg1 = document.querySelector('#message1')
const msg2 = document.querySelector('#message2')
const msg3 = document.querySelector('#message3')
const msg4 = document.querySelector('#message4')

weatherform.addEventListener('submit',(e) => {
    e.preventDefault()

    const location = search.value
    console.log(location)

    msg1.textContent = 'Loading...'
    // msg1.textContent = ''
    // msg2.textContent = ''
    // msg3.textContent = ''
    // msg4.textContent = ''


    fetch('/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if(data.error){
                msg1.textContent = data.error
            } else {
                console.log(data)
                msg1.textContent ='Temprature:- '+data.forecast.current.temperature +'\xB0C'
                msg2.textContent = 'Wind Direction:- ' + data.forecast.current.wind_dir
                msg3.textContent = 'Wind Speed:- '+data.forecast.current.wind_speed +'km/h'
                msg4.textContent = 'Weather Description:- '+data.forecast.current.weather_descriptions  
                             // msg2.textContent = data.current.temperature
                // msg3.textContent = data.forecast
            }
        })
    })
})