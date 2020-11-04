var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/ATNselect', { useUnifiedTopology: true } );

var productSchema = mongoose.Schema({
    name: String,
    price: String,
});

var Product = mongoose.model('/product', productSchema, 'product');

var p1 = new Product({
    name: "[JZW] BLACKPINK BROKEN HEART SUPERSTARS",
    price: "$16.57"
});

p1.save(function(err, p1) {});

var Product = mongoose.model('/product', productSchema, 'product');

var p2 = new Product({
    name: "[JZW] BLACKPINK MICRO POP STARS",
    price: "$9.16"
});

p2.save(function(err, p2) {});

var Product = mongoose.model('/product', productSchema, 'product');

var p3 = new Product({
    name: "[H.Y.L.T] BLACKPINK PLUSH DOLL CLOTHES",
    price: "$11.11"
});

p3.save(function(err, p3) {});

var Product = mongoose.model('/product', productSchema, 'product');

var p4 = new Product({
    name: "[H.Y.L.T] BLACKPINK CHARACTER KEYRING",
    price: "$12.03"
});

p4.save(function(err, p4) {});

var p5 = new Product({
    name: "[CHAPTER1] BLACKPINK TANGLE ANGEL BRUSH",
    price: "$21.29"
});

p5.save(function(err, p5) {});