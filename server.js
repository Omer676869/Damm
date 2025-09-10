// app.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Store message temporarily
let message = '';

app.use(express.static('public'));
app.use(express.json());

// API endpoint
app.get('/api/what', (req, res) => {
  res.json({ message: message });
});

// Endpoint to post message
app.post('/api/what', (req, res) => {
  const newMessage = req.body.message;
  message = newMessage;

  // Clear message after 1 second
  setTimeout(() => {
    message = '';
  }, 1000);

  res.status(200).send('Message received');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
