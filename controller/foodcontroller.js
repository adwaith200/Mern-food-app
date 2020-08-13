const Food=require('../models/foodmodel');

exports.getallfood=async(req,res,next)=>{
    try{
        const fooddata=await Food.find().sort('price');
        res.json({
            status:'Success',
            data:fooddata
        })
    }catch(err)
    {
        next(err);
    }
}

exports.getfood=async(req,res,next)=>{
    try{
        const fooddata=await Food.findById(req.params.id);
        res.json({
            status:'Success',
            data:fooddata
        });
    }catch(err)
    {
        next(err);
    }
}

exports.createfood=async(req,res,next)=>{
    try{
        const fooddata=await Food.create(req.body);
        res.json({
            status:'Success',
            data:fooddata
        });
    }catch(err)
    {
        next(err);
    }
}

exports.deletefood=async(req,res,next)=>{
    try{
        const fooddata=await Food.findByIdAndDelete(req.params.id);
        res.json({
            status:'Success',
            data:fooddata
        });
    }catch(err)
    {
        next(err);
    }
}