const mongoose=require('mongoose');

const orderschema=new mongoose.Schema({
    price:{
        type:Number,
        required:[true,'An order must have a price']
    },
    createddate:{
        type:Date,
        default:Date.now
    },
    userdata:{
        type:mongoose.Schema.ObjectId,
        ref:'User'
    },
    fooddata:[{
        type:mongoose.Schema.ObjectId,
        ref:'Food'
    }]
});

orderschema.pre(/^find/,function(next){
    this.populate('userdata');
    this.populate('fooddata');
    next();
});

const Order=mongoose.model('Order',orderschema);

module.exports=Order;