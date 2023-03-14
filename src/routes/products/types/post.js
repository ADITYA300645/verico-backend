const express = require("express")
const { Product, Comment } = require("../../../models/models")
const router = express.Router()
const multer = require("multer")
const upload = multer()

router.post("/product",upload.single("productImage"),async (req,res)=>{
     var file = req.file.buffer
     var name = await req.body.name;
     var price = await req.body.price;
     var tags = await req.body.tags;
     var categorie = await req.body.categories;
     var soldBy = await req.body.soldBy;
     const product = new Product(
          {
               name,
               price,
               tags,
               images: [file],
               categorie,
               soldBy
          }
     )
     var data = await product.save()
     console.log(data);
     res.json({data})
})

router.post("/product/:id/comment",async (req,res)=>{
     var product = await Product.findById(
          req.params.id
     )
     console.log(req.body.comment);
     if(product){
          var comment = new Comment({
               commentedOn:req.params.id,
               comment:req.body.comment,
          })
          var commentData = await comment.save();
          product.comments.push(comment);
          var resProduct = await product.save();
          res.json({commentData})
     }
})



module.exports = router