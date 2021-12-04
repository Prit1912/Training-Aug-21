const express = require('express');
const SubcategoryDomain = require('../../../../domains/subcategory.domain')
const router = express.Router({mergeParams: true});

class subcategoryController{
    
    static async get(req,res){
        const subcategoryDomain = new SubcategoryDomain();
        subcategoryDomain.getSubCategory(req,res);
    }

    static async getById(req,res){
        const subcategoryDomain = new SubcategoryDomain();
        subcategoryDomain.getSubCategoryById(req,res);
    }

    static async add(req,res){
        const subcategoryDomain = new SubcategoryDomain();
        subcategoryDomain.addSubCategory(req,res);
    }

    static async edit(req,res){
        const subcategoryDomain = new SubcategoryDomain();
        subcategoryDomain.editSubCategory(req,res);
    }

    static async delete(req,res){
        const subcategoryDomain = new SubcategoryDomain();
        subcategoryDomain.deleteSubCategory(req,res);
    }
}

// get subcategories
router.get('/',subcategoryController.get)

// add subcategory
router.post('/',subcategoryController.add)

// edit subcategory
router.put('/:sId', subcategoryController.edit)

// delete subcategory
router.delete('/:sId',subcategoryController.delete)

// get subcategory by id
router.get('/:sId', subcategoryController.getById)

module.exports = router