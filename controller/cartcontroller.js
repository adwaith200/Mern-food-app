const Cart=require('../models/cartmodel');
const Apperror=require('../utils/Apperror');

exports.getallcart=async(req,res,next)=>{
    try{
        const cartdata=await Cart.find();
        res.json({
            status:'success',
            data:cartdata
        });
    }catch(err)
    {
        next(err);
    }
}

exports.getcartdatabyid=async(req,res,next)=>{
    try{
        const userid=req.params.id;
        const cartdata=await Cart.find({userdata:userid});
        res.json({
            status:'success',
            data:cartdata
        });

    }catch(err)
    {
        next(err);
    }
}

exports.addcart=async(req,res,next)=>{
    try{
        const cartdata=await Cart.create(req.body);
        res.json({
            status:'success',
            data:cartdata
        });
    }catch(err)
    {
        next(err);
    }
}

exports.deletecartitem=async(req,res,next)=>{
    try{
        const cartdata=await Cart.findByIdAndDelete(req.body.id);
        res.json({
            status:'success',
            data:cartdata
        });
    }catch(err)
    {
        next(err);
    }
}

