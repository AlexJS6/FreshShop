const express = require('express');
const router = express.Router();

const pageCtrl = require('../controllers/pages');

router.get('/index', pageCtrl.getIndex);
router.get('/about', pageCtrl.getAbout);
router.get('/cart', pageCtrl.getCart);
router.get('/checkout', pageCtrl.getCheckout);
router.get('/contact', pageCtrl.getContact);
router.get('/gallery', pageCtrl.getGallery);
router.get('/my-account', pageCtrl.getMyAccount);
router.get('/shop-detail', pageCtrl.getShopDetail);
router.get('/shop', pageCtrl.getShop);
router.get('/wishlist', pageCtrl.getWishlist);

module.exports = router;