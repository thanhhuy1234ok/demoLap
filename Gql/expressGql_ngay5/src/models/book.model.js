const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: String,
    price: Number,
    quantity: Number,
    description: String,
    authorId: mongoose.Schema.Types.ObjectId,
});

module.exports = mongoose.model('Books', bookSchema)