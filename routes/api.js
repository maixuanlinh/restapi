const express = require('express');
const router = express.Router();
const {
    getAllItems,
    getItemById,
    addItem,
    updateItem,
    deleteItem
} = require('../controllers/apiController');

// Define routes
router.get('/getall', getAllItems);
router.get('/:id', getItemById);
router.post('/add', addItem);
router.put('/update/:id', updateItem);
router.delete('/delete/:id', deleteItem);

module.exports = router;
