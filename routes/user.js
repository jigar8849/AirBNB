 const express = require("express");
const router = express.Router();
const User = require("../models/user");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware");



// sign-up page show 
router.get("/signup",(req,res)=>{
    res.render("users/signup.ejs")
})

//sign-up page detail was store in database
router.post("/signup",wrapAsync(async(req,res)=>{
    try{
    let {username, email, password} = req.body;
    const newUser = new User({username , email})
    const registeredUser = await User.register(newUser, password)
    req.login(registeredUser, (err)=>{
        if(err) return next(err);
        req.flash("success" , "Welcome to AirBNB")
        res.redirect("/listings")
    })
    }catch(e){
        req.flash("error" , e.message)
        res.redirect("/signup")
    }
}))


//log-in page show
router.get("/login",(req,res)=>{
    res.render("users/login.ejs")
})

//log-in functionality
router.post("/login",saveRedirectUrl,
    passport.authenticate("local", {failureRedirect : "/login", failureFlash : true}),
    async(req,res)=>{
        req.flash("success" , "Welcome back to AirBNB")
        const redirectUrl = req.session.redirectUrl || "/listings"
        res.redirect(redirectUrl) 
})

//log-out functionality implemented
router.get("/logout",(req,res,next)=>{
    req.logout((err)=>{
        if(err){
            return next(err);
        }
        req.flash("success" , "Logged Out!!!")
        res.redirect("/listings ")
    })
})
 

module.exports = router