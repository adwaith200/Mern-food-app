const Order=require('../models/ordermodel');

exports.getallorders=async(req,res,next)=>{
    try{    
        const orderdata=await Order.find();
        res.json({
            status:'Success',
            data:orderdata
        });
    }catch(err)
    {
        next(err);
    }
}

exports.getordersbyid=async(req,res,next)=>{
    try{
        const userid=req.user.id;
        const orderdata=await Order.find({userdata:userid});
        res.json({
            status:'success',
            data:orderdata
        });

    }catch(err)
    {
        next(err);
    }
}

exports.addtoorder=async(req,res,next)=>{
    try{
        const orderdata=await Order.create(req.body);
        res.json({
            status:'Success',
            data:orderdata
        });
    }catch(err)
    {
        next(err);
    }
}