const express=require('express');
const authcontroller=require('../controller/authcontroller');
const cartcontroller=require('../controller/cartcontroller');
const router=express.Router();
 
router.use(authcontroller.protected);
router.route('/').get(cartcontroller.getallcart).post(cartcontroller.addcart).delete(cartcontroller.deletecartitem);
router.route('/userid/:id').get(cartcontroller.getcartdatabyid);

module.exports=router;