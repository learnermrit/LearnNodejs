const express = require('express');

const router = express.Router();

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message:'this is product get request handeling'
    });
});

router.post('/',(req,res,next)=>{
    res.status(200).json({
        message:'this is Products POST request handeling'
    })
});

router.get('/:productId',(req,res,next)=>{
    const id= req.params.productId;
    res.status(200).json({
        message:'product id recieved',
        id: id
    })
})

router.patch('/:productId',(req,res,next)=>{
    const id= req.params.productId;
    res.status(200).json({
        message:'product updated sucessfully'
    })
});

router.delete('/:productId',(req,res,next)=>{
    const id= req.params.productId;
    res.status(200).json({
        message:'product deleted sucessfully'
    })
});
module.exports = router;