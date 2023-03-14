const { default: mongoose } = require("mongoose");
const accountSchema = require("./AccountSchema");
const productSchema = require("./ProductSchema");

const orderSchema = new mongoose.Schema({
     resultantPrice : Number,
     pid:{
          type: productSchema
     },
     quantity:Number,
     buyTimePrice : Number,
     orderedBy : accountSchema,
     orderAddress : String,
     orderDate : Date,
     estimatedDiliveryDate : Date,
     lastLocation : String,
     Status:String
})

module.exports = orderSchema;