

exports.getAbout = (req, res, next) => {res.render('about', {page: 'Home', menu: 'ABOUT US'})};
exports.getCart = (req, res, next) => {res.render('cart', {page: 'Shop', menu: 'Cart'})};
exports.getCheckout = (req, res, next) => {res.render('checkout', {page: 'Shop', menu: 'Checkout'})};
exports.getContact = (req, res, next) => {res.render('contact', {page: 'Home', menu: 'Contact Us'})};
exports.getGallery = (req, res, next) => {res.render('gallery', {page: 'Home', menu: 'Services'})};
exports.getIndex = (req, res, next) => {res.render('index', {page: 'Home', menu: 'Index'})};
exports.getMyAccount = (req, res, next) => {res.render('my_account', {page: 'Shop', menu: 'My Account'})};
exports.getShopDetail = (req, res, next) => {res.render('shop_detail', {page: 'Shop', menu: 'Shop Detail'})};
exports.getShop = (req, res, next) => {res.render('shop', {page: 'Home', menu: 'Shop'})};
exports.getWishlist = (req, res, next) => {res.render('wishlist', {page: 'Shop', menu: 'Wishlist'})};
