const express = require('express');
const path = require('path');

const app = express();

// Serve static files from current folder
app.use(express.static(__dirname));

// Always send index.html for React Router routes
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = 80;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
