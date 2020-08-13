const User=require('../models/usermodel');
const jwt=require('jsonwebtoken');
const Apperror=require('../utils/Apperror');
const {promisify}=require('util');
const { use } = require('../routes/foodroute');

exports.signup=async(req,res,next)=>{
    try{
        const userdata=await User.create(req.body);
        console.log(userdata.id);
        const token=jwt.sign({id:userdata.id},process.env.JWT_SECRET);
        res.json({
            status:'Success',
            token,
            data:userdata
        });
    }catch(err)
    {
        next(err);
    }
}

exports.login=async(req,res,next)=>{
    try{
        const {email,password}=req.body;
        if(!email||!password)
        {
            return next(new Apperror('Enter credentials',401));
        }  
        const userdata=await User.findOne({email:email});
        if(!userdata||!await userdata.checkpassword(password,userdata.password))
        {
            return next(new Apperror('Invalid credentials',401));
        }
        const token=jwt.sign({id:userdata.id},process.env.JWT_SECRET);
        res.json({
            status:'success',
            token,
            data:userdata
        });
    }catch(err)
    {
        next(err);
    }
}

exports.protected=async(req,res,next)=>{
    try{
        let token;
        console.log(req.query);
        if(req.headers.authorization&&req.headers.authorization.startsWith('Bearer'))
        {
            token=req.headers.authorization.split(' ')[1]
        }
        else if(req.query.isauth)
        {
            token=req.query.isauth;
            
        }
        else{
            return next(new Apperror('Login please',401));
        }
        const userid=await promisify(jwt.verify)(token,process.env.JWT_SECRET);
        const userdata=await User.findById(userid.id);
        req.user=userdata;
        next();
    }catch(err)
    {
        console.log(err);
        next(err);
    }
}