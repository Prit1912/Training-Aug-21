const express = require('express');
const BuyerDomain = require('../domains/buyer.domain')
const router = express.Router();
const userAuth = require('../middleware/user.middleware');
const adminAuth = require('../middleware/admin.middleware')
const auth = require('../middleware/auth.middleware')

class BuyerController{

    static async get(req,res){
        const buyerDomain = new BuyerDomain();
        buyerDomain.getBuyers(req,res);
    }

    static async getById(req,res){
        const buyerDomain = new BuyerDomain();
        buyerDomain.getBuyer(req,res);
    }

    static async add(req,res){
        const buyerDomain = new BuyerDomain();
        buyerDomain.addBuyer(req,res);
    }   

    static async delete(req,res){
        const buyerDomain = new BuyerDomain();
        buyerDomain.deleteBuyer(req,res);
    }

    static async allBuyers(req,res){
        const buyerDomain = new BuyerDomain();
        buyerDomain.buyersSummary(req,res);
    }

    static async oneBuyer(req,res){
        const buyerDomain = new BuyerDomain();
        buyerDomain.buyerSummary(req,res);
    }

    static async allCourses(req,res){
        const buyerDomain = new BuyerDomain();
        buyerDomain.coursesSummary(req,res);
    }

    static async unenroll(req,res){
        const buyerDomain = new BuyerDomain();
        buyerDomain.unenrollCourse(req,res);
    }
}

router.get('/',BuyerController.get);

// user's courses
router.get('/me/courses',[auth,userAuth],BuyerController.getById);

// user enrollment in course
router.post('/',[auth,userAuth],BuyerController.add);

// summary of all buyers
router.get('/all/summary',[auth,adminAuth],BuyerController.allBuyers);

// summary of apecific buyers
router.get('/all/summary/:id',[auth,adminAuth],BuyerController.oneBuyer);

// get name of user who boutght specific course
router.get('/courses/summary/:id',[auth,adminAuth],BuyerController.allCourses);

// unenroll from course
router.delete('/unenroll/:uid/course/:cid',[auth,adminAuth],BuyerController.unenroll);

module.exports = router