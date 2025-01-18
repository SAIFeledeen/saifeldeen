const express = require('express');
const fetch = require('node-fetch');
const path = require('path');
const app = express();

app.get('/proxy', async (req, res) => {
    const response = await fetch('https://youtube.com'); // Replace with your target site
    const content = await response.text();
    res.send(content);
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'test.html'));
});
app.listen(5500, () => console.log('Server running on http://localhost:5500'));
