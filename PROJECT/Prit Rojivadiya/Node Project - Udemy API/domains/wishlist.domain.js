const { cartitems } = require('../models/cart.model');
const {wishlistItems} = require('../models/wishlist.model');

class WishlisitDomain{

    // get wishlist items
    async getWishlistItems(req,res){
        const items = await wishlistItems.find({user: req.user._id});
        if(items[0].courses.length == 0){
            return res.status(500).send('your wishlist is empty')
        }
        res.send(items);
    }

    // get wishlist item by id
    async getWishlistItemById(req,res){
        const item = await wishlistItems.findOne({user: req.user._id}).select('courses').populate('courses');
        if(!item){
            return res.send('your wishlist is empty')
        }
        let course = item.courses.find((i)=>{
            return i._id == req.params.id
        })
        if(!course) return res.status(404).send('this course is not in your wishlist')
        res.send(course);
    }

    // remove course from wishlist
    async removeFromWishlist(req,res){
        const item = await wishlistItems.findOneAndUpdate({user: req.user._id},{
            $pull: {courses: req.params.id}
        },{new:true})
        // if(!item.courses.includes(req.params.id)){
        //     return res.send('course not in your wishlist')
        // }
        res.send(item);
    }

    // add course to cart from wishlist
    async wishlistToCart(req,res){

        let avail = await wishlistItems.find({user: req.user._id,courses: req.params.id})
        if(avail.length == 0){
            return res.status(500).send('item not in your wishlist')
        }

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
        }catch(err){
            console.log(error);
        }
    }

}

module.exports = WishlisitDomain;