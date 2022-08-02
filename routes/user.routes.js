const router = require('express').Router();
const authController = require('../controllers/auth.controller');

//Route for post method
router.post("/register", authController.signUp);
module.exports = router;