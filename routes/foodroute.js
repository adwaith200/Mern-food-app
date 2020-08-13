const express=require('express');
const foodcontroller=require('../controller/foodcontroller');
const authcontroller=require('../controller/authcontroller');
const router=express.Router();

router.route('/').get(foodcontroller.getallfood).post(authcontroller.protected,foodcontroller.createfood);
router.route('/:id').get(foodcontroller.getfood).delete(authcontroller.protected,foodcontroller.deletefood);

module.exports=router;