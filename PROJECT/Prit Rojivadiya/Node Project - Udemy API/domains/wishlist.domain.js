const { cartitems } = require('../models/cart.model');
const {wishlistItems} = require('../models/wishlist.model');

class WishlisitDomain{

    async getWishlistItems(req,res){
        const items = await wishlistItems.find({user: req.user._id});
        if(items[0].courses.length == 0){
            return res.status(500).send('your wishlist is empty')
        }
        res.send(items);
    }

    async getWishlistItemById(req,res){
        const item = await wishlistItems.findOne({$and: [{user: req.user._id},{courses: req.params.id}]}).select('courses').populate('courses');
        if(!item) return res.status(404).send('this course is not in your wishlist')
        res.send(item);
    }

    async removeFromWishlist(req,res){
        const item = await wishlistItems.findOneAndUpdate({user: req.user._id},{
            $pull: {courses: req.params.id}
        },{new:true})
        res.send(item);
    }

    async wishlistToCart(req,res){
        const user = await cartitems.findOne({user: req.user._id});
        if(!user){
            const ci = new cartitems({
                user: req.user._id,
                courses: req.params.id
            })
            try{
                const result = await ci.save();
                res.send(result);
            }catch(err){
                res.send(err);
            }
        }else{
            try{
                const item = await cartitems.findOneAndUpdate({user: req.user._id},{
                    $addToSet: {courses: req.params.id}
                },{new:true})
                res.send(item);
            }catch(err){
                res.send(err);
            }
        }
        try{
            const itm = await wishlistItems.findOneAndUpdate({user: req.user._id},{
                $pull: {courses: req.params.id}
            },{new:true})
            res.send(itm)
        }catch(err){
            res.send(err);
        }
    }

}

module.exports = WishlisitDomain;