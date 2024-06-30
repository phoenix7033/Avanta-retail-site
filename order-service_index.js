const express = require('express');
const bodyParser = require('body-parser');
const orderRoutes = require('./routes/orders');
const db = require('./db');
const app = express();
app.use(bodyParser.json());
app.use('/orders', orderRoutes);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Order Service running on port ${PORT}`);
});

