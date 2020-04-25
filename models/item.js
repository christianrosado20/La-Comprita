const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new mongoose.Schema({
    name: String,
    description: String,
    type: String,
    storeID: String,
    price: Number, 
    inventory: Number,
    image: String
});

module.exports = Item = mongoose.model('Item', itemSchema);