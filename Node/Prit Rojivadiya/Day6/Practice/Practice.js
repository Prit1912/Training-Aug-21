const customers = require('./customers.json');
console.log(customers);
const express = require('express');
const app = express();
app.use(express.json());
const Joi = require('joi');

// 1.Create a Restful API, which will return Customer list in JSON format.

app.get('/customers',(req,res)=>{
    res.send(customers);
})

// 2. Create a Restful API which will search a particular record from the customer list.

app.get('/customers/:id',(req,res)=>{
    const customer = customers.find((c)=>{
        return c.id === parseInt(req.params.id);
    })
    if(!customer) res.status(404).send('<h2>customer not found</h2>');
    res.send(customer);
})

// 3. Create a Restful API which will insert a new customer object in the customer list.

app.post('/customers',(req,res)=>{
    const schema = Joi.object({
        name: Joi.string().required(),
        phone: Joi.number().required(),
        email: Joi.string().email().required()
    })
    const result = schema.validate(req.body);
    if(result.error) return res.status(400).send(result.error);

    const customer = {
        "id": customers.length + 1,
        "name": req.body.name,
        "phone": req.body.phone,
        "email": req.body.email
    }

    customers.push(customer);
    res.send(customer);
})

// 4. Create a Restful API which update a name of existing customer whose customer ID is 1

app.put('/customers/:id',(req,res)=>{
    const customer = customers.find((c)=>{
        return c.id === parseInt(req.params.id);
    })
    if(!customer) res.status(404).send('<h2>customer not found</h2>');

    const schema = Joi.object({
        name: Joi.string().required(),
        phone: Joi.number().required(),
        email: Joi.string().email().required()
    })
    const result = schema.validate(req.body);
    if(result.error) return res.status(400).send(result.error);

    customer.name = req.body.name;
    customer.phone = req.body.phone;
    customer.email = req.body.email;

    res.send(customer);
})

// 5. Create a Restful API which will delete a record from the customer list.

app.delete('/customers/:id',(req,res)=>{
    const customer = customers.find((c)=>{
        return c.id === parseInt(req.params.id);
    })
    if(!customer) res.status(404).send('<h2>customer not found</h2>');

    const index = customers.indexOf(customer);
    customers.splice(index,1);

    res.send(customer);
})

app.listen(3000,()=>{console.log('listening at port 3000')});
