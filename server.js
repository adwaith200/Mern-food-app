const app=require('./app');
const mongoose=require('mongoose');
const dotenv=require('dotenv');

dotenv.config({path:'./config.env'});

const mongoosepass=process.env.DATABASE_PASSWORD;
const mongooseuri=process.env.DATABASE.replace('<password>',mongoosepass);

mongoose.connect(mongooseuri,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false
}).then((con)=>{
    console.log('Database connected');
}).catch(err=>console.log(err));

const port=process.env.PORT||8000;

app.listen(port,()=>{
    console.log('server running on port ',port)
});