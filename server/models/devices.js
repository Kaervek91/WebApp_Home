const mongoose = require('mongoose');

const { Schema } = mongoose;

const DeviceSchema = new Schema({
    type: String,
    description: String,
    value: Number
});

module.exports = mongoose.model('Device', DeviceSchema);



/*module.exports = function() {
    var db = require('../libs/db-connection')();
    var Schema = require('mongoose').Schema;

    var Device = Schema({
        type: String,
        description: String,
        value: Number
    });
    
    return db.model('device', Device);

}*/