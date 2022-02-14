const { cartitems } = require('../models/cart.model')
const { purchases } = require('../models/purchase.model')


class CartDomain{

    async seeMyCart(req,res){
        const id = req.user._id;
        const items = await cartitems.findOne({user: id})
            .select('courses')
            .populate('courses')
        if(!items){
            return res.status(500).send('your cart is empty');
        }
        res.send(items);
    }

    // remove course from cart
    async removeFromCart(req,res){
        const userid = req.user._id;
        const courseid = req.params.id;

        const items = await cartitems.findOneAndUpdate({user: userid},{
            $pull: {courses: courseid}
        },{new: true})

        if(!items){
            return res.status(500).send('item not in cart')
        }

        res.send(items)
    }

    // buy course (remove course from cart and add to buyer collection)
    async buyCourses(req,res){
        const userid = req.user._id;
        const items = await cartitems.findOne({user: userid})
        if(items == undefined){
            return res.status(500).send('your cart is empty')
        }
        // console.log(items.courseId);
        // const items = await cartitems.deleteOne({userId: userid})
        let user = await purchases.find({user: userid})
        console.log(user);
        if(user.length == 0){
            const purchaser = new purchases({
                user: userid,
                courses: items.courses
            })
            try {
                const result = await purchaser.save();
                await cartitems.findOneAndDelete({user: userid});
                res.send(result);
              } catch (e) {
                return res.send(e.message);
              }
        }
        else{
            try{
                const b = await purchases.findOneAndUpdate({user: userid},{
                    $addToSet: {"courses": items.courses}
                },{new: true})
                await cartitems.findOneAndDelete({user: userid});
                await b.save();
                res.send(b);
            }catch(err){
                console.log(err.message)
                return res.status(500).send('something wrong')
            }
        }

        // try{
        //     await cartitems.findOneAndDelete({user: userid});
        // }catch(err){
        //     return res.status(500).send('something went wrong')
        // }
    }

}

module.exports = CartDomain;