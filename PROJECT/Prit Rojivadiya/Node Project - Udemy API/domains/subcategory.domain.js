const { subcategories, validateSubCategory } = require('../models/subcategory.model')

class SubcategoryDomain{

    // get all subcategories
    async getSubCategory(req,res){
        const allSubCategories = await subcategories.find({category: req.params.cId});
        if(allSubCategories.length == 0) return res.status(404).send('There are no sub categories added yet');
        res.send(allSubCategories);
    }

    // get category by id
    async getSubCategoryById(req,res){
        const subCategory = await subcategories.find({category: req.params.cId, _id:req.params.sId});
        if(subCategory.length == 0) return res.status(404).send('not found');
        res.send(subCategory);
    }

    // add category
    async addSubCategory(req,res){
        const ct = await subcategories.find().sort({_id:-1});
        let id;
        if(ct.length == 0){
            id = 1;
        }else{
            id = ct[0]._id + 1
        }

        // validation
        let {error} = validateSubCategory(req.body);
        if(error){
            return res.send(error.details[0].message);
        }

        // checking that subcategory name already exists or not
        const subcate = ct.find((c)=>{
            return c.name == req.body.name;
        })

        if(subcate){
            return res.status(500).send('subcategory already added')
        }

        let subcategory = new subcategories({
            _id: id,
            name: req.body.name,
            category: req.params.cId
        })
        try {
            const result = await subcategory.save();
            res.send(result);
          } catch (e) {
            res.send(e.message);
          }

    }

    // edit category
    async editSubCategory(req,res){
        const subCategory = await subcategories.findOneAndUpdate({category: req.params.cId, _id:req.params.sId},{
            $set: {name: req.body.name}
        },{new:true});
        if(!subCategory) return res.status(404).send('not found');
        res.send(subCategory);
    }

    // delete category
    async deleteSubCategory(req,res){
        const subCategory = await subcategories.findOneAndDelete({category: req.params.cId, _id:req.params.sId});
        if(!subCategory) return res.status(404).send('not found');
        res.send(subCategory);
    }

}

module.exports = SubcategoryDomain;