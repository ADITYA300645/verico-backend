const { Mongoose, default: mongoose } = require("mongoose");
const orderSchema = require("./OrderSchema");
const  productSchema  = require("./ProductSchema");

const accountSchema = mongoose.Schema({
     name:String,
     address : String,
     phoneNo: Number,
     password:String,
     profileAvatar : Buffer,
     SavedItems : [productSchema],
     LikedItems:[productSchema],
     orders:[orderSchema],
     type:String,
     // token:[{token}]
})

module.exports = accountSchema;