const express = require('express');
const router = express.Router({mergeParams: true});
const Role = require('../../../config/roles')
const {auth,permit} = require('../../../middleware/auth.middleware')
const categoryController = require('./category/category.controller')
const courseRoute = require('./courses/courses.controller');
const userRoute = require('./users/user.controller')

router.use([auth,permit(Role.admin)])
// router.use(authorize(Role.admin))
router.use('/category',categoryController);
router.use('/courses',courseRoute);
router.use('/users',userRoute);

module.exports = router;