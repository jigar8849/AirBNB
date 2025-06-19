const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");
const listingRouter = require("./routes/listing.js"); // require all listings routes from routes folder 
const reviewRouter = require("./routes/review.js") //require all revirews router from routes folder
const userRouter = require("./routes/user.js"); //require all user router from routes folder
const session = require("express-session"); //use for sessions
const flash = require("connect-flash"); //use for flash messages
const passport = require("passport")
const LocalStrategy = require("passport-local")
const User = require("./models/user.js") //require user model from models folder


app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended : true}));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname,"/public")));


app.get("/",(req,res)=>{
    res.redirect("/listings");
});


main()
    .then(()=>{
        console.log("Connected to MongoDB");
    })
    .catch((err)=>{
        console.log(err);
    });
async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/AirBNB");
}


const sessionOptions = {
    secret : "mysupersecretcode",
    resave : false,
    saveUninitialized : true,
    cookie : {
        expired : Date.now() * 7 *24 * 60 * 60 * 1000,
        maxAge : 7 *24 * 60 * 60 * 1000,
        httpOnly : true,
    }
}



app.use(session(sessionOptions)); //midleware session call
app.use(flash());
app.use(passport.initialize());//initialize the passport
app.use(passport.session()) //use passport session
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

 
//middleware for display flash massages
app.use((req,res,next)=>{
    res.locals.success = req.flash("success") //flash messages
    res.locals.error = req.flash("error") //flash messages
    res.locals.currUser = req.user; // this var is use in nav bar to show that user is logged in or not, if it than logout btn show else login btn show
    next();
});

// app.get("/demo",async(req,res)=>{
//     let fakeUSer = new User({
//         email : "jigar@gmail.com",
//         username : "jigar",
//     })
//     let registerUser = await User.register(fakeUSer,"passwordHaiYe")
//     res.send(registerUser)
// })
 

// this line use for use all route related to listings & reviews from routes folder
app.use("/listings", listingRouter)
app.use("/listings/:id/reviews", reviewRouter)
app.use("/", userRouter)


app.get("/test-error", (req, res, next) => {
    next(new ExpressError(404, "This is a test error"));
});

app.listen(8080,()=>{
    console.log("Server is running on port 8080");
}) 


app.use((err, req, res, next) => {
    const { statusCode = 500, message = "Something went wrong" } = err;
    res.status(statusCode).render("error.ejs", { message }); // you can pass full `err` if needed
}); 



// this app.all give me error when i went to use it and still no any way to find to solve it 
// app.all("*",(req,res,next)=>{
//     next(new ExpressError(404,"Page not found!!!"))    
// })