const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("../AirBNB/models/listing")
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync");
const ExpressError = require("./utils/ExpressError.js");
const {listingSchema, reviewSchema} = require("./schema.js");  //require schema from joi for server side validation
const Review = require("../AirBNB/models/review")


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

// server side validation for listing schema
const validateListing = (req,res,next)=>{
    let {error} = listingSchema.validate(req.body);
        if(error){
            let errMsg = error.details.map((el)=> el.message).join(",");
            throw new ExpressError(400, errMsg);
        }else{
            next()
        }
}

const validateReview = (req,res,next)=>{
    let {error} = reviewSchema.validate(req.body);
        if(error){
            let errMsg = error.details.map((el)=> el.message).join(",");
            throw new ExpressError(400, errMsg);
        }else{
            next()
        }
}


// Index Route
app.get("/listings",wrapAsync(async(req,res)=>{
    const allListings = await Listing.find({})
    res.render("listings/index.ejs",{allListings});
})
)

// New listing button 
app.get("/listings/new",(req,res)=>{
   res.render("listings/new.ejs"); 
});

// Show Route
app.get("/listings/:id",wrapAsync(async(req,res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id).populate("reviews");
    res.render("listings/show.ejs",{listing});
})
)

// create new listing
app.post("/listings",validateListing,wrapAsync(async(req,res,next)=>{
        const  newListings = new Listing(req.body.listings);
        await newListings.save();
        res.redirect("/listings");
    })
);

// Redirect to edit form
app.get("/listings/:id/edit",wrapAsync(async(req,res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit.ejs",{listing});
}));

app.put("/listings/:id",validateListing,wrapAsync(async(req,res)=>{
      let {id} = req.params;
      await Listing.findByIdAndUpdate(id, { ...req.body.listings });
      res.redirect(`/listings/${id}`);
}));


// Delete route
app.delete("/listings/:id",wrapAsync(async(req,res)=>{
    let {id} = req.params;
    await Listing.findByIdAndDelete(id);
    res.redirect("/listings");
}))

// Reviews  - ka post route

app.post("/listings/:id/reviews",validateReview, wrapAsync(async(req,res)=>{
    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);

     listing.reviews.push(newReview);

     await newReview.save();
     await listing.save();

     res.redirect(`/listings/${listing._id}`);
}));



// app.get("/testListing",(req,res)=>{
//     let sampleListing = new Listing({
//         title : "my home",
//         description : "near the air-port",
//         price : 1000,
//         location : "Ahmedabad",
//         country : "India"
//     });
//     sampleListing.save().then(()=>{
//         console.log("data was saved")
//         res.send("Testing was successed")
//     })
// })

// this app.all give me error when i went to use it and still no any way to find to solve it 


app.get("/test-error", (req, res, next) => {
    next(new ExpressError(404, "This is a test error"));
});


app.use((err, req, res, next) => {
    const { statusCode = 500 , message = "Something went wrong" } = err;
    res.status(statusCode).render("error.ejs", { message }); // 🔁 this line must include `err`
});


app.listen(8080,()=>{
    console.log("Server is running on port 8080");
})  


// app.all("*",(req,res,next)=>{
//     next(new ExpressError(404,"Page not found!!!"))    
// })