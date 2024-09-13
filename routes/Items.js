// routes/items.js
const express = require('express');
const router = express.Router();
const Item = require('../models/Item');

// GET all items
router.get('/', (req, res) => {
  Item.getAllItems((items) => {
    res.json(items);
  });
});

// POST a new item
router.post('/', (req, res) => {
  const newItem = req.body;
  Item.addItem(newItem, (items) => {
    res.json(items);
  });
});

// DELETE an item
router.delete('/:id', (req, res) => {
  const id = req.params.id;
  Item.deleteItem(id, (items) => {
    res.json(items);
  });
});

// UPDATE an item
router.put('/:id', (req, res) => {
  const id = req.params.id;
  const updatedItem = req.body;
  Item.updateItem(id, updatedItem, (items) => {
    res.json(items);
  });
});

module.exports = router;
