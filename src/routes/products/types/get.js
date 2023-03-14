const express = require("express")
const { Product } = require("../../../models/models")
const router = express.Router()

router.get("/product/:id",async (req,res)=>{
     var id = req.params.id
     var product = await Product.findById(id)
     res.json({
          product
     })
})

router.get("/",async (req,res)=>{
     var allProducts = await Product.find()
     res.json({"products":allProducts})
})   

router.get("/tag",async (req,res)=>{
     var tag = req.query.tag
     console.log(tag);
     var products = await Product.find({
          'Tags': {
               "$in":tag
          }
     })
     res.json({products})
})

router.get("/product/:id/comments",async (req,res)=>{
     var productId = req.params.id
     console.log(productId);
     var product = await Product.findById(productId)
     console.log(product.comments);
     res.json({product: product.comments})
})

router.get("/mostLiked",async (req,res)=>{
     var products = await Product.find().sort({likes:'descending'}).exec()
     res.json({products})
})

router.get("/search",async (req,res)=>{
     var search = req.query.search
     console.log(search);
     var products = await Product.find({
          'Tags': {
               "$in":search //todo implement some regex
          }
     },"name price")
     console.log(products);
     res.json({products})
})




module.exports = router;