const productSchema = require("../schema/ProductSchema")
const accountSchema = require("../schema/AccountSchema")
const orderSchema = require("../schema/OrderSchema")
const { default: mongoose } = require("mongoose")
const commentsSchema = require("../schema/CommentsSchema")
const categorieSchema = require("../schema/CategorieSchema")

const Product = mongoose.model("product",productSchema)
const User = mongoose.model("account",accountSchema)
const Order = mongoose.model("order",orderSchema)
const Comment = mongoose.model("comment",commentsSchema)
const Category = mongoose.model("category",categorieSchema)


module.exports = {Product,User,Order,Comment,Category};