const mongoose = require('mongoose')

const authorSchema = new mongoose.Schema({
    name: String,
    email: String,
    dateOfBird: String,
    gender: String,
    address: String,
    phone: String,
    password: String,
    image: String,
    books: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Books'
        }
    ],
});


module.exports = mongoose.model('Authors', authorSchema)