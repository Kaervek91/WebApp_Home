const mongoose = require('mongoose');

let db;

module.exports = function Connection(){
    console.log("Connection");
    if(!db){
        mongoose.connect('mongodb://localhost/crud-example');
        db = mongoose;
    }
    return db;
}