const express = require('express');
const app = express();

app.get('/logout', (req, res) => {
  res.send('Logout endpoint hit!');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Logout service running on port ${port}`);
});
