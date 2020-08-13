const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');

const userschema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,'A user must hava a name']
    },
    email:{
        type:String,
        required:[true,'A user must hava an email']
    },
    password:{
        type:String,
        required:[true,'A user must hava a password']
    },
    confirmpassword:{
        type:String,
        required:[true,'Confirm password required'],
        validate:{
            validator:function(){
                return this.password===this.confirmpassword
            },
            message:'Passwords do not match'
        }
    },
    role:{
        type:String,
        enum:['user','admin'],
        default:'user'
    }
});

userschema.pre('save',async function(next){
    this.password=await bcrypt.hash(this.password,12);
    this.confirmpassword=undefined;
    next();
});

userschema.methods.checkpassword=async function(ippass,dbpass){
    return await bcrypt.compare(ippass,dbpass);
}


const User=mongoose.model('User',userschema);

module.exports=User;