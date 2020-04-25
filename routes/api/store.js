const express = require('express');
const router = express.Router();

const Store = require('../../models/store');

// @route   GET api/stores
// @desc    Get all Stores
// @access  Public
router.get('/', (req, res) => {
    Store.find()
        .sort({ name: 1 })
        .then(store => res.json(store))
        .catch(err => console.log(err));
});

// @route   GET api/store/:name
// @desc    Search for an specific store
// @access  Public
router.get('/:name', (req, res) => {
    Store.find({ name: req.body.name })
        .sort({ name: 1 })
        .then(store => res.json(store))
        .catch(err => console.log(err));
});

// @route   POST api/store/addStore
// @desck   Add a new Store
// @access  Private
router.post('/addStore', (req, res) => {
    
    // Search if Item already exists
    Store.findOne({ name: req.body.name, municipality: req.body.municipality })
        .then(store => {
            if (store) {
                return res.status(400).json({ store: "Store already exists"});
            } else {
                const newStore = new Store({
                    name: req.body.name,
                    type: req.body.type,
                    municipality: req.body.municipality,
                    mapsDirection: req.body.mapsDirection
                });
                newStore
                    .save()
                    .then(store => res.json(store))
                    .catch(err => console.log(err));
            }
        });
});

module.exports = router;