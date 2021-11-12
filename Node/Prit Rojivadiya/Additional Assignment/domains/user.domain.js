const { users, validateUser } = require('../models/user.model')

class UserDomain{

    // get all users
    async getUsers(req,res){
        const allUser = await users.find();
        if(allUser.length == 0) return res.status(404).send('There are no users added yet');
        res.send(allUser);
    }

    // get user by id
    async getUser(req,res){
        const user = await users.findById(req.params.id);
        if(!user) return res.status(404).send('user not found');
        res.send(user)
    }

    // add user
    async addUser(req,res){
        const c = req.body
        const { error } = validateUser(c);
        if(error) return res.status(500).send(error.details[0].message)
        let user = new users({
            _id: c._id,
            name: c.name,
            email: c.email,
            phone: c.phone
        })
        try {
            const result = await user.save();
            res.send(result);
          } catch (e) {
            res.send(e.message);
          }
    }

    // edit user
    async editUser(req,res){

        const { error } = validateUser(req.body);
        if(error) return res.status(500).send(error.details[0].message)

        const id = req.params.id;
        const datas = await users.find();
        const c = datas.find((e)=>{
            return e._id == id;
        })

        if(!c) return res.status(404).send('user not found');

        try{
            const user = await users.findByIdAndUpdate(id, {
                $set: {
                    name: req.body.name,
                    email: req.body.email,
                    phone: req.body.phone
                }
            },{new: true})
            res.send(user);
        }catch(e){
            console.log(e);
        } 
    }

    // delete user
    async deleteUser(req,res){
        const id = req.params.id;
        const user = await users.findByIdAndDelete(id);
        if(!user) return res.status(404).send('user not found')
        else{
            res.send('deleted successfully');
        }
    }

}

module.exports = UserDomain;