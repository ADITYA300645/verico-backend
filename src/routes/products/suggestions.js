const express = require('express');
const router = express.Router()

router.get("/",(req,res)=>{
     res.json({"SUGGESTIOSN":"NO SUGGESTIONS"})
})

module.exports = router