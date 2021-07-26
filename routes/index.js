var express = require('express');
var router = express.Router();
const user = require("../controller").user;
//user api
router.post('/add', user.add)
router.get('/list', user.list)
router.post('/delete', user.delete)

module.exports = router;