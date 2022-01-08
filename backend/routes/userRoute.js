const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController')

router.route("/signUp")
    .post(authController.signUp);

router.route("/signIn")
    .post(authController.signIn);

module.exports = router;