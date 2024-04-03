// npm init -y
// npm i express

const express = require('express')
const app = express();


// Body Parser
// used to parse req.body in express -> PUT or POST
const bodyParser = require('body-parser');
app.use(bodyParser.json())
// specifically parse json data and add it to the request.body Object

//activate the server on 3000 port
app.listen(3000, () => {
    console.log("Server Started at port no. 3000")
})

// Routes
//get request
// app k upper get ka rout
// server k homepage aaoge to ye response k andar ye string milega
app.get('/', (request,response) => {
    response.send("Hello Everyone")
})

// submitting the data or post some data
// data is automatically in the request

app.post('/api/cars', (request,response) => {
    const{name, brand} = request.body;
    console.log(name)
    console.log(brand)
    response.send("Car Submitted Successfully.")
})

// initially this code is not working
// https://localhost:3000/api/cars
// Cannot GET/api/cars
// to validate that request is working or not use POSTMAN
// to execute this snippet we use body parser.

// npm i monogoose

const monogoose = require('mongoose')

//promise
monogoose.connect('mongodb://localhost:27017/myDatabase', {
    useNewurlParser:true,
    useUnifiedTopology:true
    //configuration to write. It is mandatory to execute without any issue
})
.then( () => {console.log("Connection Successful")})
.catch( (error) => {console.log("Received an error")});