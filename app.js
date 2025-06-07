const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("../AirBNB/models/listing")
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");


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
    res.send("this is home route");
});

// Index Route
app.get("/listings",async(req,res)=>{
    const allListings = await Listing.find({})
    res.render("listings/index.ejs",{allListings});
});

// New listing button 
app.get("/listings/new",(req,res)=>{
   res.render("listings/new.ejs"); 
});

// Show Route
app.get("/listings/:id",async(req,res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show.ejs",{listing});
});

// Save new listing
app.post("/listings",async(req,res)=>{
    const  newListings = new Listing(req.body.listings);
    await newListings.save();
    res.redirect("/listings");
});

// Redirect to edit form
app.get("/listings/:id/edit",async(req,res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit.ejs",{listing});
});

app.put("/listings/:id",async(req,res)=>{
      let {id} = req.params;
      await Listing.findByIdAndUpdate(id, { ...req.body.listings });
      res.redirect(`/listings/${id}`);
});


// Delete route
app.delete("/listings/:id",async(req,res)=>{
    let {id} = req.params;
    await Listing.findByIdAndDelete(id);
    res.redirect("/listings");
})


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


app.listen(8080,()=>{
    console.log("Server is running on port 8080");
})