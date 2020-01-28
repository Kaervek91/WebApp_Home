const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// Require connection to DB
const { mongoose } = require('./libs/db-connection.js');

const indexRoutes= require('./routes/routes.js');
const dbAPIRoutes = require ('./routes/database-api.js');

// Settings
app.set('port',process.env.PORT || 3000);
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');

//Middleware
app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.urlencoded({extended: false})); // Comprender datos desde formularios
app.use(express.json()); // Permite enviar y recibir datos en formato JSON

//Routes
app.use('/', indexRoutes);
//API Routes
app.use('/db', dbAPIRoutes);


app.listen(app.get('port'), ()=>{
    console.log('Server on port ', app.get('port'));
});