const mongoose = require('mongoose');

const URI = 'mongodb://localhost/crud-example';

mongoose.connect(URI)
    .then(db => console.log('Connected to database'))
    .catch(err => console.error(err));
    
module.exports = mongoose;