const mongoose = require('mongoose');

class Mongo {
    constructor() {
        this._connect();
    }

    _connect() {
        mongoose.connect('mongodb://localhost:27017/demogql', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
            .then(() => console.log('MongoDB Connected Success!!!!'))
            .catch(err => console.log(err));
    }
}

module.exports = new Mongo();
