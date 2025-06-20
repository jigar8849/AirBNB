const express = require("express");
const router = express.Router({mergeParams : true});
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js")
const {isLoggedIn, isOwner, validateListing} = require("../middleware.js")

const multer = require("multer")
const {storage} = require("../cloudConfig.js")
const upload = multer({storage})

const listingController = require("../controllers/listings.js");




// Index Route
router.get("/",wrapAsync(listingController.index))

// New listing button 
router.get("/new",isLoggedIn,listingController.renderNewForm);

// Show Route
router.get("/:id",wrapAsync(listingController.showListing))


// create new listing
router.post("/",isLoggedIn,
    validateListing,
    upload.single("listing[image]"),  //this is a multer parse our image and save images in to cloudinary
    wrapAsync(listingController.createListing));
 
// Edit - Redirect to edit form
router.get("/:id/edit",isLoggedIn,isOwner,wrapAsync(listingController.renderEditForm));

// Update route
router.put("/:id",isLoggedIn,isOwner,upload.single("listing[image]"),validateListing,wrapAsync(listingController.updateListing));

// Delete route
router.delete("/:id",isLoggedIn,isOwner,wrapAsync(listingController.destroyListing))


module.exports = router;