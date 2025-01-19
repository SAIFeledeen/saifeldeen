const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000; // Change to 80 for default HTTP port

// Serve static files (like HTML, CSS, JS)
app.use(express.static(path.join(__dirname)));

// Route to serve your main HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(3000, () => {
    console.log(`Server is running at http://localhost:${3000}`);
});
