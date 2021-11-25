const express = require('express');
const router = express.Router({mergeParams: true});
const Role = require('../../../config/roles')
const {auth,permit} = require('../../../middleware/auth.middleware')
const cartRoute = require('./cart/cart.controller');
const courseRoute = require('./courses/course.controller');
const wishlistRoute = require('./wishlist/wishlist.controller');

router.use([auth,permit(Role.user)])

router.use('/cart',cartRoute);
router.use('/courses',courseRoute);
router.use('/wishlist', wishlistRoute);

module.exports = router;