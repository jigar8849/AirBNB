const Listing = require("./models/listing.js")
const Review = require("./models/review")
const { listingSchema , reviewSchema } = require("./schema.js");  //require schema from joi for server side validation
const ExpressError = require("./utils/ExpressError.js"); 

module.exports.isLoggedIn = (req,res,next)=>{
    if(!req.isAuthenticated()){
        req.session.redirectUrl = req.originalUrl; // after login stay on same page not redirect to home page
        req.flash("error","You must be logged in to create listing!")
        return res.redirect("/login")
    }
    next()
}


//this is middleware function store session redirect url in locals variable 
module.exports.saveRedirectUrl = (req,res,next)=>{
    if(req.session.redirectUrl){
        res.locals.redirectUrl = req.session.redirectUrl
    }
    next()
}
//this middleware check that a person who login is owner of that listing if it than allow him to Update the listing
module.exports.isOwner = async(req,res,next)=>{
    let {id} = req.params;
    let listing = await Listing.findById(id);
    if(!listing.owner.equals(res.locals.currUser._id)){
        req.flash("error","You don't have permission to edit")
        return res.redirect(`/listings/${id}`)
      }
      next()
}


// server side validation for listing schema
module.exports.validateListing = (req,res,next)=>{
    let {error} = listingSchema.validate(req.body);
        if(error){
            let errMsg = error.details.map((el)=> el.message).join(",");
            throw new ExpressError(400, errMsg);
        }else{
            next()
        }
}

// server side validation for review schema
module.exports.validateReview = (req,res,next)=>{
    let {error} = reviewSchema.validate(req.body);
        if(error){
            let errMsg = error.details.map((el)=> el.message).join(",");
            throw new ExpressError(400, errMsg);
        }else{
            next()
        }
}



module.exports.isReviewAuthor = async(req,res,next)=>{
    let {id,reviewId} = req.params;
    let review = await Review.findById(reviewId);
    if(!review.author.equals(res.locals.currUser._id)){
        req.flash("error","You are not the author of this review")
        return res.redirect(`/listings/${id}`)
      }
      next()
}
