const express = require('express');
const CartDomain = require('../../../domains/cart.domain')
const router = express.Router({ mergeParams: true });

class CartController{

    static async seeCart(req,res){
        const cartDomain = new CartDomain();
        cartDomain.seeMyCart(req,res);
    }

    static async removeItem(req,res){
        const cartDomain = new CartDomain();
        cartDomain.removeFromCart(req,res);
    }

    static async buycourses(req,res){
        const cartDomain = new CartDomain();
        cartDomain.buyCourses(req,res);
    }
    
}
router.get('/',CartController.seeCart)
router.post('/buy',CartController.buycourses)
router.delete('/:id',CartController.removeItem)

module.exports = router