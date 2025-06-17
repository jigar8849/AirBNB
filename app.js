const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");
const listings = require("./routes/listing.js"); // require all listings routes from routes folder 
const reviews = require("./routes/review.js") //require all revirews router from routes folder

app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended : true}));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname,"/public")));

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
app.get("/",(req,res)=>{
    res.redirect("/listings");
});



// this line use for use all route related to listings & reviews from routes folder
app.use("/listings", listings)
app.use("/listings/:id/reviews", reviews)

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