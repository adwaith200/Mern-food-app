const mongoose=require('mongoose');

const cartschema=new mongoose.Schema({
    price:{
        type:Number,
        required:[true,'A food must have a price']
    },
    fooddata:{
        type:mongoose.Schema.ObjectId,
        ref:'Food'
    },
    userdata:{
        type:mongoose.Schema.ObjectId,
        ref:'User'
    }
});

cartschema.pre(/^find/,function(next){
    this.populate('fooddata');
    this.populate('userdata');
    next();
});

const Cart=mongoose.model('Cart',cartschema);

module.exports=Cart;