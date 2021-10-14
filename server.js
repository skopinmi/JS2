const express = require('express');
const fs = require('fs');

const app = express();

app.use(express.static('.'));
app.use(express.json());

app.get('/catalog', (req, res) => {
  fs.readFile('catalog.json', 'utf8', (err, data) => {
    res.send(data);
  });
});

app.listen(3000, function() {
  console.log('server is running on port 3000!');
});