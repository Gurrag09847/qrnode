const express = require('express');
const app = express();
const qrcode = require('qrcode');
const cors = require('cors');
const PORT = process.env.PORT || 8080;
app.use(cors);

app.listen(PORT, () => {
    console.log('Server is live')
})

app.get('/', (req, res) => {
    res.json({ name: 'GurraGG' })
})

app.post('/qrcode', (req, res, next) => {
    const query = req.query;
    
    res.json({ method: 'posted' })
})

module.exports = app