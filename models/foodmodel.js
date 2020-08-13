const mongoose=require('mongoose');

const foodschema=new mongoose.Schema({
    publisher:{
        type:String,
        required:true
    },
    title:String,
    recipe_id:String,
    image_url:String,
    social_rank:Number,
    publisher_url:String
});

const Food=mongoose.model('Food',foodschema);

module.exports=Food;