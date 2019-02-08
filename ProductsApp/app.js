// require ExpressJS body parser packages
const express = require('express');
const bodyParser = require('body-parser');

// initialize express app
const product = require('./routes/product.route'); // Imports routes for the products
const app = express();

app.use('/products', product);

// Set dedicated port and tell Express app to listen to that port
let port = 1234;

app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});