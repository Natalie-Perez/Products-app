const express = require('express');
const bodyParser = require('body-parser');

const product = require('./routes/product.route'); // Imports routes for the products
const app = express();

// connecting app to mLab database
//Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://someuser:abcd1234@ds127015.mlab.com:27015/products-app';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error: '));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/products', product);


// Set dedicated port and tell Express app to listen to that port
let port = 1234;

app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});



/// Update to code:  exports.product_details = function (req, res, next){