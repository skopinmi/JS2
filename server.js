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

app.get('/cart', (req, res) => {
    fs.readFile('cart.json', 'utf8', (err, data) => {
      res.send(data);
    });
  });

app.post('/addToCart', (req, res) => {
    fs.readFile('cart.json', 'utf8', (err, data) => {
      if (err) {
        res.send('{"result": 0}');
      } else {
        const cart = JSON.parse(data);
        const item = req.body;

        
        // проверка наличия товара в корзине перед добавлением
        let isAdd = false;
        cart.forEach(element => { 
            if (element.product.product_name === item.product.product_name) {
                element.count ++;
                isAdd = true;
            }
        });
        if(isAdd === false) {
            cart.push(item);
        }
        
        fs.writeFile('cart.json', JSON.stringify(cart), (err) => {
          if (err) {
            res.send('{"result": 0}');
          } else {
            res.send('{"result": 1}');
          }
        });
      }
    });
});

app.listen(3000, function() {
  console.log('server is running on port 3000!');
});