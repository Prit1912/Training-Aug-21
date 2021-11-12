const express = require('express');
const BuyerDomain = require('../domains/buyer.domain')
const router = express.Router();

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

}

router.get('/',BuyerController.get);
router.get('/:id',BuyerController.getById);
router.post('/',BuyerController.add);
router.delete('/:id',BuyerController.delete);
router.get('/all/summary',BuyerController.allBuyers);
router.get('/all/:id/summary',BuyerController.oneBuyer);
// get name of user who boutght specific course
router.get('/courses/:id/summary',BuyerController.allCourses);

module.exports = router