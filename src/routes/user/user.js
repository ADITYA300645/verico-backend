const express = require('express');
const router = express.Router();

router.get("/",(req,res)=>{
     res.json({
          "USER ROUTE":"IS ACTIVE"
     })
})
module.exports = router;