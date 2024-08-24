const express = require('express');

const router = express.Router();

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message:'this is order get request handeling'
    });
});

router.post('/',(req,res,next)=>{

    
    res.status(200).json({
        message:'this is orders POST request handeling'
    })
});

router.get('/:orderId',(req,res,next)=>{
    const id= req.params.orderId;
    res.status(200).json({
        message:'order id recieved',
        id: id
    })
})

router.patch('/:orderId',(req,res,next)=>{
    const id= req.params.orderId;
    res.status(200).json({
        message:'order updated sucessfully'
    })
});

router.delete('/:orderId',(req,res,next)=>{
    const id= req.params.orderId;
    res.status(200).json({
        message:'order deleted sucessfully'
    })
});
module.exports = router;