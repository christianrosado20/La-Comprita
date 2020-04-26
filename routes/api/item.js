const express = require('express');
const router = express.Router();

const Item = require('../../models/item');

// @route   GET api/items
// @desc    Get all Items
// @access  Public
router.get('/', (req, res) => {
    Item.find()
        .sort({ name: 1 })
        .then(item => res.json(item))
        .catch(err => console.log(err));
});

// @route   GET api/items/:name
// @desc    Search for item
// @access  Public
router.get('/:name', (req, res) => {
    Item.find({ name: req.body.name })
        .sort({ name: 1 })
        .then(item => res.json(item))
        .catch(err => console.log(err));
});

// @route   POST api/items/addItem
// @desck   Add a new Item
// @access  Public
router.post('/addItem', (req, res) => {
    
    // Search if Item already exists
    Item.findOne({ name: req.body.name })
        .then(item => {
            if (item) {
                return res.status(400).json({ item: "Item already exists"});
            } else {
                const newItem = new Item({
                    name: req.body.name,
                    description: req.body.description,
                    type: req.body.type,
                    storeID: req.body.storeID,
                    price: req.body.price, 
                    inventory: req.body.inventory,
                    image: req.body.image,
                    storeType: req.body.storeType,
                    municipality: req.body.municipality
                });
                newItem
                    .save()
                    .then(item => res.json(item))
                    .catch(err => console.log(err));
            }
        });
});

module.exports = router;