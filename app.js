/// ------------------ Khai bao LIB de su dung
var express = require('express');
const { ObjectID } = require('mongodb');
var app = express();
var nunjucks = require('nunjucks');
var db = require('./models/db');
var env = nunjucks.configure('view', {
    autoescape: true,
    express: app
});
var session = require('express-session');

app.use(session({
	resave: false,
	saveUninitialized: true,
	secret: '@J>:1ob#IFcasdapspfhoasuhfoashbfouasfe',
	cookie: {
		maxAge: 600000
	}
}));


/// ------------------ CONFIG
const PORT = process.env.PORT || 8080;
const Product = db.Product;

/// ------------------ Khai bao LIB tự viết


/// ------------------ Khai bao cac Folder Tĩnh
app.use(express.static('public'));


app.set('views', './view');
app.set('view engine', 'html');


/// ------------------ Khai bao cac Control, hàm , ... 
/// ..................................................
app.get('/', homePage);
function homePage(req, res) {

    //giờ em load thử hết tất cả products lên cái web

    Product.find({}, function(err, docs) {
        res.render('ATN_select', {products: docs});
    });
    
}

/// ..................................................
app.get('/login', loginPage);
function loginPage(req, res) {    
    res.render('login');
}
/// ..................................................
app.get('/product', productPage);
function productPage(req, res){
    res.render('product');
}

app.get('/product/add_to_cart/:id', productAddToCart);
function productAddToCart(req, res){
    var id = req.params.id;

    if(!req.session.cart) req.session.cart = {};
    
    Product.find({_id: ObjectID(id)}, function(err, product) {
        product = product[0];

        if(product != null) {

            console.log(req.session.cart);

            if(id in req.session.cart) {
                req.session.cart[id].qty++;
            }else {
                req.session.cart[id] = JSON.parse(JSON.stringify(product));
                req.session.cart[id].qty = 1;
            }

        }

        res.redirect('/');
    });
}

/// ..................................................
app.get('/qrcode', qrPage);
function qrPage(req, res){
    res.render('qrcode');
}
/// ..................................................
app.get('/order', orderPage);
function orderPage(req, res){
    res.render('order', {cart: req.session.cart});
}
/// ..................................................
app.get('/payment', paymentPage);
function paymentPage(req, res){
    res.render('payment');
}
/// ..................................................
app.get('/feedback', feedbackPage);
function feedbackPage(req, res){
    res.render('feedback');
}
/// ..................................................
app.get('/aboutATN', aboutATNPage);
function aboutATNPage(req, res){
    res.render('aboutATN');
}
/// ..................................................
app.get('/quit', quitPage);
function quitPage(req, res) {
    res.send(' shutdown SERVER !!! ... ');
    console.log('\t shutdown SERVER !!! ... ');
    process.exit(0);
}

/// ------------------ gọi SERVER thực thi
var server = app.listen( process.env.PORT || PORT , function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("\n... SERVER http://atnselect.com", host, port)
});