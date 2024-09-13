// models/Item.js
const fs = require('fs');
const path = require('path');

const dataFile = path.join(__dirname, '../data/inventory.json');

module.exports = {
  getAllItems: (callback) => {
    fs.readFile(dataFile, 'utf8', (err, data) => {
      if (err) throw err;
      const items = JSON.parse(data);
      callback(items);
    });
  },
  addItem: (item, callback) => {
    fs.readFile(dataFile, 'utf8', (err, data) => {
      if (err) throw err;
      const items = JSON.parse(data);
      item.id = Date.now().toString();
      items.push(item);
      fs.writeFile(dataFile, JSON.stringify(items), (err) => {
        if (err) throw err;
        callback(items);
      });
    });
  },
  deleteItem: (id, callback) => {
    fs.readFile(dataFile, 'utf8', (err, data) => {
      if (err) throw err;
      let items = JSON.parse(data);
      items = items.filter(item => item.id !== id);
      fs.writeFile(dataFile, JSON.stringify(items), (err) => {
        if (err) throw err;
        callback(items);
      });
    });
  },
  updateItem: (id, updatedItem, callback) => {
    fs.readFile(dataFile, 'utf8', (err, data) => {
      if (err) throw err;
      let items = JSON.parse(data);
      items = items.map(item => item.id === id ? { ...item, ...updatedItem } : item);
      fs.writeFile(dataFile, JSON.stringify(items), (err) => {
        if (err) throw err;
        callback(items);
      });
    });
  }
};
