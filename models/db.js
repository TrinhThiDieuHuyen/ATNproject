var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/ATNselect', { useUnifiedTopology: true } );

var productSchema = mongoose.Schema({
    images: Array,
    name: String,
    price: String
});

var Product = mongoose.model('/product', productSchema, 'product');

/*var p1 = new Product({
    images: ['BLACKPINK BROKEN HEART SUPERSTARS.jpg'],
    name: "[JZW] BLACKPINK BROKEN HEART SUPERSTARS",
    price: "$16.57"  
});

p1.save(function(err, p1) {});

var p2 = new Product({
    name: "[JZW] BLACKPINK MICRO POP STARS",
    price: "$9.16"
});

p2.save(function(err, p2) {});

var p3 = new Product({
    name: "[H.Y.L.T] BLACKPINK PLUSH DOLL CLOTHES",
    price: "$11.11"
});

p3.save(function(err, p3) {});

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

var p6 = new Product({
    name: "PRICE LITTLE PEOPLE BIG HELPERS HOME",
    price: "$39.97 "
});

p6.save(function(err, p6) {});

var p7 = new Product({
    name: "BARBIE BEACH CRUISER AND KEN DOLL",
    price: "$32.92 "
});

p7.save(function(err, p7) {});

var p8 = new Product({
    name: "BARBIE GLAM CONVERTIBLE, PINK/BLACK",
    price: "$14.88 "
});

p8.save(function(err, p8) {});

var p9 = new Product({
    name: "WINNER LIGHT STICK KEYRING",
    price: "$13.88 "
});

p9.save(function(err, p9) {});

var p10 = new Product({
    name: "[EVERYENCORE] WINNER WHALE BAG CHARM",
    price: "$16.66"
});

p10.save(function(err, p10) {});

var p11 = new Product({
    name: "[EVERYENCORE] WINNER MILLIONS STICKER SET",
    price: "$9.26"
});

p11.save(function(err, p11) {});

var p12 = new Product({
    name: "[CROSS] WINNER BROOCH ",
    price: "$9.26"
});

p12.save(function(err, p12) {});

var p13 = new Product({
    name: "LEGO TECHNIC REMOTE CONTROLLED STUNT RACER 42095 BUILDING KIT",
    price: "$80.99"
});

p13.save(function(err, p13) {});

var p14 = new Product({
    name: "LEGO STAR WARS BESPIN DUEL 75294 CLOUD CITY DUEL BUILDING KIT ",
    price: "$107.98"
});

p14.save(function(err, p14) {});

var p15 = new Product({
    name: "LEGO STAR WARS: THE MANDALORIAN THE RAZOR CREST 75292 BUILDING KIT",
    price: "$129.99"
});

p15.save(function(err, p15) {});*/

module.exports.Product = Product; 