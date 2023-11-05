const router = require("express").Router();
const controller = require("../controller/userController");





// Initializing routes


// Send OTP to given user id
router.post('/authenticate', controller.authenticate);


module.exports = router;