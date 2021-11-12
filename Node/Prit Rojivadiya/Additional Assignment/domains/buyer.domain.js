const { buyers } = require('../models/buyer.model')
const { courses } = require('../models/course.model')

class BuyerDomain{

    // get all buyers
    async getBuyers(req,res){
        const allBuyers = await buyers.find();
        if(allBuyers.length == 0) return res.status(404).send('There are no buyers yet');
        res.send(allBuyers);
    }

    // get buyer by id
    async getBuyer(req,res){
        const buyer = await buyers.find({userId: req.params.id});
        if(buyer.length == 0) return res.status(404).send('buyer not found');
        res.send(buyer)
    }

    // add buyer
    async addBuyer(req,res){
        const id = req.body.userId
        let user = await buyers.find({userId: id})
        if(user.length == 0){
            const buyer = new buyers(req.body)
            try {
                const result = await buyer.save();
                res.send(result);
              } catch (e) {
                res.send(e.message);
              }
        }else{
            try{
                const b = await buyers.findOneAndUpdate({userId: id},{
                    $addToSet: {"courseId": req.body.courseId}
                },{new: true})
                await b.save();
                res.send(b);
            }catch(err){
                console.log(err.message)
                res.status(500).send('something wrong')
            }
        }
    }

    // delete buyer
    async deleteBuyer(req,res){
        const buyer = await buyers.findOneAndDelete({userId: req.params.id});
        if(!buyer) return res.status(404).send('buyer not found')
        else{
            res.send('deleted successfully');
        }
    }

    // summary of buyers
    async buyersSummary(req,res){
        const data = await buyers.find()
            // .populate(['courseId','userId'])
            .populate('courseId')
            .populate('userId')
            .populate({
                path: 'courseId',
                populate: {path: "category"}
            })
        res.send(data);
    }

    // summary of buyer
    async buyerSummary(req,res){
        const data = await buyers.find({userId: req.params.id})
            // .populate(['courseId','userId'])
            .populate('userId','name -_id')
            .populate({
                path: 'courseId',
                select: 'name -_id',
                populate: {path: "category", select: "name -_id"}
            })
        if(data.length == 0) return res.status(500).send('user has not enrolled in any course')
        res.send(data);
    }

    // summary of courses
    async coursesSummary(req,res){
        const data = await buyers.find({courseId: req.params.id})
                                 .select('userId')
                                 .populate('userId')
        res.send(data);
    }

}

module.exports = BuyerDomain;