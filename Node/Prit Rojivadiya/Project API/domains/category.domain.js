const { categories } = require('../models/category.model')

class CategoryDomain{

    // get all categories
    async getCategories(req,res){
        const allCategories = await categories.find();
        if(allCategories.length == 0) return res.status(404).send('There are no categories added yet');
        res.send(allCategories);
    }

    // get category by id
    async getCategory(req,res){
        const category = await categories.findById(req.params.id);
        if(!category) return res.status(404).send('category not found');
        res.send(category)
    }


    // add category
    async addCategory(req,res){
        const ct = await categories.find().sort({_id:-1});
        let id;
        if(ct.length == 0){
            id = 1;
        }else{
            id = ct[0]._id + 1
        }

        let category = new categories({
            _id: id,
            name: req.body.name
        })
        try {
            const result = await category.save();
            res.send(result);
          } catch (e) {
            res.send(e.message);
          }

    }

    // edit category
    async editCategory(req,res){
        const id = req.params.id;
        const datas = await categories.find();
        const c = datas.find((e)=>{
            return e._id == id;
        })

        if(!c) return res.status(404).send('category not found');

        try{
            const category = await categories.findByIdAndUpdate(id, {
                $set: {name: req.body.name}
            },{new: true})
            res.send(category);
        }catch(e){
            console.log(e);
        } 
    }

    // delete category
    async deleteCategory(req,res){
        const id = req.params.id;
        const category = await categories.findByIdAndDelete(id);
        if(!category) return res.status(404).send('category not found')
        else{
            res.send('deleted successfully');
        }
    }

}

module.exports = CategoryDomain;