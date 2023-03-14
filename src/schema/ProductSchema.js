const { default: mongoose, models } = require("mongoose");
const accountSchema = require("./AccountSchema");
const categorieSchema = require("./CategorieSchema");
const commentsSchema = require("./CommentsSchema");


const productSchema =  mongoose.Schema({
     name:String,
     price : Number,
     images: [Buffer],
     likes:{
          default:0,
          type:Number
     },
     comments:{type:[commentsSchema],default:[]} , 
     categorie : {type:[categorieSchema],default:[]}  ,
     Tags:[String],
     discount : {
          default:0,
          type:Number
     },
     soldBy:accountSchema
})

module.exports = productSchema;