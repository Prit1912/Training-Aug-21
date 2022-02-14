const express = require('express');
const PaymentDomain = require('../../domains/payment.domain')
const router = express.Router();
const {auth,permit} = require('../../middleware/auth.middleware')
const role = require('../../config/roles')

class paymentController{
    static async getAll(req,res){
        const paymentDomain = new PaymentDomain()
        paymentDomain.getAllPayments(req,res);
    }

    static async getById(req,res){
        const paymentDomain = new PaymentDomain();
        paymentDomain.getPaymentById(req,res);
    }

    static async pay(req,res){
        const paymentDomain = new PaymentDomain()
        paymentDomain.addPayment(req,res);
    }

    static async callback(req,res){
        const paymentDomain = new PaymentDomain();
        paymentDomain.callback(req,res);
    }

    static async update(req,res){
        const paymentDomain = new PaymentDomain();
        paymentDomain.updatePayment(req,res);
    }

    static async delete(req,res){
        const paymentDomain = new PaymentDomain();
        paymentDomain.deletePayment(req,res);
    }

    static async getFailed(req,res){
        const paymentDomain = new PaymentDomain();
        paymentDomain.getFailedPayments(req,res);
    }

    static async getPending(req,res){
        const paymentDomain = new PaymentDomain();
        paymentDomain.getPendingPayments(req,res);
    }

    static async getSuccess(req,res){
        const paymentDomain = new PaymentDomain();
        paymentDomain.getSuccessPayments(req,res);
    }
}

//get all payments
router.get("/",[auth,permit(role.admin)],paymentController.getAll);

//make payment
router.post("/",[auth,permit(role.user,role.admin)],paymentController.pay);

// callback
router.post("/callback",paymentController.callback);

// failed payments
router.get("/failed-payments",[auth,permit(role.admin)],paymentController.getFailed);

// pending payments
router.get("/pending-payments",[auth,permit(role.admin)],paymentController.getPending);

// success payments
router.get("/success-payments",[auth,permit(role.admin)],paymentController.getSuccess);

// get payment by id
router.get("/:id",[auth,permit(role.admin)],paymentController.getById);

// update payment by id
router.put("/:id",[auth,permit(role.admin)],paymentController.update);

// delete payment by id
router.delete("/:id",[auth,permit(role.admin)],paymentController.delete);

module.exports = router