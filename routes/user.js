 const express = require("express");
const router = express.Router();
const User = require("../models/user");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware");

const userController = require("../controllers/users");

// sign-up page show 
router.get("/signup",userController.renderSignupForm)

//sign-up page detail was store in database
router.post("/signup",wrapAsync(userController.signup))


//log-in page show
router.get("/login",userController.renderLoginForm)

//log-in functionality
router.post("/login",saveRedirectUrl,
    passport.authenticate("local", {failureRedirect : "/login", failureFlash : true}), userController.login)

//log-out functionality implemented
router.get("/logout",userController.logout)
 

module.exports = router