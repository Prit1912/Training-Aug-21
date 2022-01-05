const {payments} = require('../models/payment.model');

class PaymentDomain{

    // get all payments
    async getAllPayments(req,res){
        const payment = await payments.find();
        if(payment.length == 0){
            return res.send("not payments yet");
        }
        res.send(payment);
    }

    // get payment by id
    async getPaymentById(req,res){
        const payment = await payments.findOne({_id:req.params.id}).populate('user','-password');
        if(!payment) return res.status(404).send('no payment found')
        res.send(payment);
    }

    // make payment
    async addPayment(req,res){
        const p = await payments.find().sort({ _id: -1 });
        let id;
        if (p.length == 0) {
          id = 1;
        } else {
          id = p[0]._id + 1;
        }

        const payment = new payments({
            _id: id,
            payment_mode: req.body.payment_mode,
            amount: req.body.amount,
            payment_status: req.body.payment_status,
            payment_date: req.body.payment_date,
            user: req.body.user,
            courses: req.body.courses
        })

        try{
            let result = await payment.save();
            res.send(result);
        }catch(err){
            console.log(err.message)
            res.status(500).send(err.message);
        }
    }

    // update payment
    async updatePayment(req,res){
        const payment = await payments.findOne({_id:req.params.id});
        if(!payment) return res.status(404).send('no payment found')
        const newPayment = await payments.findOneAndUpdate({_id:req.params.id},{
            $set: req.body
        },{new:true})
        res.send(newPayment)
    }

    // delete payment
    async deletePayment(req,res){
        const payment = await payments.findOne({_id:req.params.id});
        if(!payment) return res.status(404).send('no payment found');
        const p = await payments.findByIdAndDelete(req.params.id);
        res.send(p);
    }

    // get failed payments
    async getFailedPayments(req,res){
        const payment = await payments.find({payment_status: 'Failed'});
        if(payment.length == 0) return res.status(404).send('no payments found');
        res.send(payment);
    }

    // get pending payments
    async getPendingPayments(req,res){
        const payment = await payments.find({payment_status: 'Pending'});
        if(payment.length == 0) return res.status(404).send('no payments found');
        res.send(payment);
    }

    // get success payments
    async getSuccessPayments(req,res){
        const payment = await payments.find({payment_status: 'Success'});
        if(payment.length == 0) return res.status(404).send('no payments found');
        res.send(payment);
    }

}

module.exports = PaymentDomain;