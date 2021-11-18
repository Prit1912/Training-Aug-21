const express = require('express');
const CategoryDomain = require('../../../domains/category.domain')
const router = express.Router();

class categoryController{

    static async get(req,res){
        const categoryDomain = new CategoryDomain();
        categoryDomain.getCategories(req,res);
    }

    static async getById(req,res){
        const categoryDomain = new CategoryDomain();
        categoryDomain.getCategory(req,res);
    }

    static async add(req,res){
        const categoryDomain = new CategoryDomain();
        categoryDomain.addCategory(req,res);
    }

    static async edit(req,res){
        const categoryDomain = new CategoryDomain();
        categoryDomain.editCategory(req,res);
    }   

    static async delete(req,res){
        const categoryDomain = new CategoryDomain();
        categoryDomain.deleteCategory(req,res);
    }

}


// get all categories
router.get('/',categoryController.get);

// add category
router.post('/',categoryController.add);

// update category name
router.put('/:id',categoryController.edit);

// remove category
router.delete('/:id',categoryController.delete);

// get specific category
router.get('/:id',categoryController.getById);

module.exports = router