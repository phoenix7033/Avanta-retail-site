const express = require('express');
const router = express.Router();
const db = require('../db'); 
// Sample endpoints
router.get('/', async (req, res) => {
    const payments = await db.query('SELECT * FROM payments');
    res.json(payments);
}); 
router.post('/', async (req, res) => {
    const { order_id, amount } = req.body;
    const result = await db.query('INSERT INTO payments (order_id, amount) VALUES (?, ?)', [order_id, amount]);
    res.json({ id: result.insertId });
}); 
module.exports = router;
