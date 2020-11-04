/// ------------------ Khai bao LIB de su dung
var express = require('express');
var app = express();
var nunjucks = require('nunjucks');
var env = nunjucks.configure('view', {
    autoescape: true,
    express: app
});
/// ------------------ CONFIG
const PORT = process.env.PORT || 8081;

/// ------------------ Khai bao LIB tự viết


/// ------------------ Khai bao cac Folder Tĩnh
app.use(express.static('public'));


app.set('views', './view');
app.set('view engine', 'html');


/// ------------------ Khai bao cac Control, hàm , ... 
/// ..................................................
app.get('/', homePage);
function homePage(req, res) {
    res.render('ATN_select');
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
/// ..................................................
app.get('/qrcode', qrPage);
function qrPage(req, res){
    res.render('qrcode');
}
/// ..................................................
app.get('/order', orderPage);
function orderPage(req, res){
    res.render('order');
}
/// ..................................................
app.get('/payment', paymentPage);
function paymentPage(req, res){
    res.render('payment');
}
/// ..................................................
app.get('/report', reportPage);
function reportPage(req, res){
    res.render('report');
}
/// ..................................................
app.get('/report', reportPage);
function reportPage(req, res){
    res.render('report');
}
/// ..................................................
app.get('/aboutATN', reportPage);
function reportPage(req, res){
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
var server = app.listen( PORT , function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("\n... SERVER http://atnselect.com", host, port)
});
