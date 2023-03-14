const express = require('express');
const router = express.Router()
const suggestionHandler = require("./suggestions")
const getRequests = require("./types/get")
const postRequests = require('./types/post')
const patchRequests = require("./types/patch")
const deleteRequests = require("./types/delete")

router.use("/suggestions",suggestionHandler)
router.use("/",getRequests)
router.use("/",postRequests)
router.use("/",patchRequests)
router.use("/",deleteRequests)

module.exports = router