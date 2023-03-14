const { default: mongoose } = require("mongoose");

const commentsSchema = mongoose.Schema({
     commentedBy:{
          type:mongoose.Types.ObjectId,
          ref:"account"
     },
     comment:String,
     commentedOn:{
          type:mongoose.Types.ObjectId,
          ref:"product"
     },
     likes:{
          type:Number,
          default:0
     },
     Reports:{type:[String],default:[]},  //todo : Make Report Schema "FEELING OVERY DESIGNED OR REAL"
     dislikes:{
          type:Number,
          default:0
     }
})

module.exports =  commentsSchema;