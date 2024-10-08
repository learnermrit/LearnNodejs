const express= require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser= require('body-parser');


const app = express();



const productRoutes= require('./api/routes/product')
const orderRoutes= require('./api/routes/orders')

mongoose.connect("mongodb+srv://Mrit:mrit123@cluster0.of14v.mongodb.net/");

//mddlewares
app.use(morgan('dev'));  // logger dependencies
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-with,Content-Type,Accept,Authorization"
    );

    if(req.method==='OPTIONS'){
        res.header('Access-Control-Allow-Methods','PUT,POST,PATCH,DELETE,GET');
        res.status(200).json({});
    }
})


app.use('/products',productRoutes);  
app.use('/orders',orderRoutes);

app.use((req,res,next)=>{
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
})

app.use((error,req,res,next)=>{
    res.status(error.status||500);
    res.json({
        error:{
            message:error.message
        }
    })
})

// app.use((req,res,next)=>{
//     res.status(200).json({
//         message :"hi mrityunjay"
//     })
// });

module.exports= app;