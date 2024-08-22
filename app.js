const express= require('express');

const app = express();


const productRoutes= require('./api/routes/product')
const orderRoutes= require('./api/routes/orders')

app.use('/products',productRoutes);  
app.use('/orders',orderRoutes);

// app.use((req,res,next)=>{
//     res.status(200).json({
//         message :"hi mrityunjay"
//     })
// });

module.exports= app;