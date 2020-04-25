const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const storeSchema = new mongoose.Schema({
    name: String,
    type: String,
    municipality: String,
    mapsDirection: String
});

module.exports = Store = mongoose.model('Store', storeSchema);