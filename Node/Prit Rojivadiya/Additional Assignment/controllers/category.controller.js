const express = require('express');
const CategoryDomain = require('../domains/category.domain')
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

router.get('/',categoryController.get);
router.post('/',categoryController.add);
router.put('/:id',categoryController.edit);
router.delete('/:id',categoryController.delete);
router.get('/:id',categoryController.getById);

module.exports = router