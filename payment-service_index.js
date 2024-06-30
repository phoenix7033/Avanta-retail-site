const express = require('express');
const bodyParser = require('body-parser');
const paymentRoutes = require('./routes/payments');
const db = require('./db');
const app = express();
app.use(bodyParser.json()); 
app.use('/payments', paymentRoutes); 
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Payment Service running on port ${PORT}`);
});

