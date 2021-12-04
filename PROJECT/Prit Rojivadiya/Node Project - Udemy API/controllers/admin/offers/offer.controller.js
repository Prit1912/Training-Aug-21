const express = require('express');
const OfferDomain = require('../../../domains/offer.domain')
const router = express.Router();

class offerController{
    
    static async get(req,res){
        const offerDomain = new OfferDomain();
        offerDomain.getOffers(req,res);
    }

    static async getById(req,res){
        const offerDomain = new OfferDomain();
        offerDomain.getOfferById(req,res);
    }

    static async getLive(req,res){
        const offerDomain = new OfferDomain();
        offerDomain.getLiveOffers(req,res);
    }

    static async add(req,res){
        const offerDomain = new OfferDomain();
        offerDomain.addOffer(req,res);
    }

    static async update(req,res){
        const offerDomain = new OfferDomain();
        offerDomain.updateOffer(req,res);
    }

    static async goLive(req,res){
        const offerDomain = new OfferDomain();
        offerDomain.makeOfferLive(req,res);
    }

    static async remove(req,res){
        const offerDomain = new OfferDomain();
        offerDomain.removeOffer(req,res);
    }

}

// see all offers
router.get('/',offerController.get);

// see live offers only
router.get('/liveoffers', offerController.getLive);

// get offer by id
router.get('/:id', offerController.getById);

// add offer
router.post('/', offerController.add);

// set offer live for users
router.put('/:id/golive', offerController.goLive);

// update offer details
router.put('/:id', offerController.update);

// remove offer
router.delete('/:id', offerController.remove);


module.exports = router