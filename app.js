const express=require('express');
const foodroute=require('./routes/foodroute');
const userroute=require('./routes/userroute');
const cartroute=require('./routes/cartroute');
const orderroute=require('./routes/orderroute');
const errorcontroller=require('./controller/errorcontroller');
const Apperror=require('./utils/Apperror');
const cors=require('cors');
const path=require('path');

const app=express();

app.use(express.json());

app.use(cors());
app.use('/food',foodroute);
app.use('/user',userroute);
app.use('/cart',cartroute);
app.use('/order',orderroute);
if(process.env.NODE_ENV==='production')
{
    app.use(express.static('client/build'));
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    });
}
// app.all('*',(req,res,next)=>{
//     next(new Apperror('Route not found',404));
// });

app.use(errorcontroller);


module.exports=app;