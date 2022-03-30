const path = require('path')
const express = require('express')
const hbs = require('hbs')
const weather_api = require('./weather')

const app = express()
const port = process.env.PORT || 3000

const public_directory = path.join(__dirname,'../public')
const view_path = path.join(__dirname,'../templates/views')
const partial_path = path.join(__dirname,'../templates/partials')

app.set('view engine','hbs')

app.set('views',view_path)

hbs.registerPartials(partial_path)

app.use(express.static(public_directory))

app.get('',(req,res) => {
    res.render('index',{
        title:'Weather API',
        username:"Aniket"
    })
})

app.get('/weather',(req,res) => {
    console.log(req.query.address)
    if(!req.query.address){
        return res.send({
            error: 'you must provide an address'
        })
    }

    weather_api(req.query.address,(error,forecastdata) => {
        if(error){
            return res.send({error})
        }
        res.send({
            forecast: forecastdata,
            address: req.query.address
        })
    })
})

app.listen(port,() => {
    console.log('Server Started on '+port)
})