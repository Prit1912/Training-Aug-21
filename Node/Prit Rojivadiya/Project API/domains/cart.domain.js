const { cartitems } = require('../models/cart.model')
const { buyers } = require('../models/buyer.model')


class CartDomain{

    async seeMyCart(req,res){
        const id = req.user._id;
        const items = await cartitems.findOne({userId: id})
            .select('courseId -_id')
            .populate('courseId','name price -_id')
        res.send(items);
    }

    // remove course from cart
    async removeFromCart(req,res){
        const userid = req.user._id;
        const courseid = req.params.id;

        const items = await cartitems.findOneAndUpdate({userId: userid},{
            $pull: {courseId: courseid}
        },{new: true})
        res.send(items)
    }

    // buy course (remove course from cart and add to buyer collection)
    async buyCourses(req,res){
        const userid = req.user._id;
        const items = await cartitems.findOne({userId: userid})
        if(items == undefined){
            return res.status(500).send('your cart is empty')
        }
        // console.log(items.courseId);
        // const items = await cartitems.deleteOne({userId: userid})
        let user = await buyers.find({userId: userid})
        console.log(user);
        if(user.length == 0){
            const buyer = new buyers({
                userId: userid,
                courseId: items.courseId
            })
            try {
                const result = await buyer.save();
                res.send(result);
              } catch (e) {
                res.send(e.message);
              }
        }
        else{
            try{
                const b = await buyers.findOneAndUpdate({userId: userid},{
                    $addToSet: {"courseId": items.courseId}
                },{new: true})
                await b.save();
                res.send(b);
            }catch(err){
                console.log(err.message)
                res.status(500).send('something wrong')
            }
        }

        try{
            await cartitems.findOneAndDelete({userId: userid});
        }catch(err){
            return res.status(500).send('something went wrong')
        }
    }

}

module.exports = CartDomain;