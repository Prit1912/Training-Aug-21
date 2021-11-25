const express = require('express');
const router = express.Router({mergeParams: true});
const Role = require('../../../config/roles')
const {auth,permit} = require('../../../middleware/auth.middleware')
const courseRoute = require('./courses/course.controller');

router.use([auth,permit(Role.instructor)])

router.use('/courses',courseRoute);

module.exports = router;