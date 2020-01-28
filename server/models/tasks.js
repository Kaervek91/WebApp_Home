const mongoose = require('mongoose');

const { Schema } = mongoose;

const TaskSchema = new Schema({
    title: String,
    description: String,
    status: Boolean
});

module.exports = mongoose.model('Task', TaskSchema);

/*module.exports = function() {
    var db = require('../libs/db-connection')();
    var Schema = require('mongoose').Schema;

    var Task = Schema({
        title: String,
        description: String,
        status: Boolean
    });
    
    return db.model('tasks', Task);

}*/