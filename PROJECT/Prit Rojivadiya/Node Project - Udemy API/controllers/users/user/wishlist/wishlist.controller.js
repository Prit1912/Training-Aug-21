const express = require('express');
const router = express.Router();
const WishlisitDomain = require('../../../../domains/wishlist.domain');

class WishlistController{

    static async get(req,res){
        const wishlistDomain = new WishlisitDomain();
        wishlistDomain.getWishlistItems(req,res);
    }

    static async getById(req,res){
        const wishlistDomain = new WishlisitDomain();
        wishlistDomain.getWishlistItemById(req,res);
    }

    static async remove(req,res){
        const wishlistDomain = new WishlisitDomain();
        wishlistDomain.removeFromWishlist(req,res);
    }

    static async addToCart(req,res){
        const wishlistDomain = new WishlisitDomain();
        wishlistDomain.wishlistToCart(req,res);
    }

}

// see all wishlist courses
router.get('/',WishlistController.get);

// get wishlist item by id
router.get('/:id',WishlistController.getById);

// remove from wishlist
router.delete('/:id',WishlistController.remove);

// add to cart
router.post('/:id/addtocart', WishlistController.addToCart);

module.exports = router;