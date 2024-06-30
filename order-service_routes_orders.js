const express = require('express');
const router = express.Router();
const db = require('../db'); 
// Sample endpoints
router.get('/', async (req, res) => {
    const orders = await db.query('SELECT * FROM orders');
    res.json(orders);
}); 
router.post('/', async (req, res) => {
    const { item, quantity } = req.body;
    const result = await db.query('INSERT INTO orders (item, quantity) VALUES (?, ?)', [item, quantity]);
    res.json({ id: result.insertId });
});
module.exports = router;

