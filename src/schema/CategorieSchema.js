const { Mongoose, default: mongoose } = require("mongoose");

const categorieSchema = new mongoose.Schema({
     categorieName : String
})

module.exports = categorieSchema;