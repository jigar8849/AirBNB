const express = require("express");
const router = express.Router({mergeParams : true});
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js")
const {isLoggedIn, isOwner, validateListing} = require("../middleware.js")

const listingController = require("../controllers/listings.js");




// Index Route
router.get("/",wrapAsync(listingController.index))

// New listing button 
router.get("/new",isLoggedIn,listingController.renderNewForm);

// Show Route
router.get("/:id",wrapAsync(listingController.showListing))


// create new listing
router.post("/",validateListing,wrapAsync(listingController.createListing));

// Edit - Redirect to edit form
router.get("/:id/edit",isLoggedIn,isOwner,wrapAsync(listingController.renderEditForm));

// Update route
router.put("/:id",isLoggedIn,isOwner,validateListing,wrapAsync(listingController.updateListing));

// Delete route
router.delete("/:id",isLoggedIn,isOwner,wrapAsync(listingController.destroyListing))


module.exports = router;