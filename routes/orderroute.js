const express=require('express');
const authcontroller=require('../controller/authcontroller');
const ordercontroller=require('../controller/ordercontroller');
const router=express.Router();

router.use(authcontroller.protected);
router.route('/').get(ordercontroller.getallorders).post(ordercontroller.addtoorder);
router.route('/userid').get(ordercontroller.getordersbyid);

module.exports=router;