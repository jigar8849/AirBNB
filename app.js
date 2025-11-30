require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");

const listingRouter = require("./routes/listing.js");
const reviewRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");

const session = require("express-session");
const MongoStore = require("connect-mongo");
const flash = require("connect-flash");

const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");

// =================
// DB CONNECTION
// =================
async function main() {
    await mongoose.connect(process.env.ATLASDB_URL);
}
main()
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log(err));

// =================
// VIEW + MIDDLEWARE SETUP
// =================
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.engine("ejs", ejsMate);

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));

// =================
// SESSION & FLASH
// =================
const store = MongoStore.create({
    mongoUrl: process.env.ATLASDB_URL,
    crypto: { secret: process.env.SECRET },
    touchAfter: 24 * 3600
});

store.on("error", (err) => {
    console.log("SESSION STORE ERROR:", err);
});

const sessionOptions = {
    store,
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true
    }
};

app.use(session(sessionOptions));
app.use(flash());

// =================
// PASSPORT AUTH
// =================
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Make user and flash messages available everywhere
app.use((req, res, next) => {
    console.log("DEBUG req.user ->", req.user);

    res.locals.currUser = req.user;
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");

    next();
});

// =================
// ROUTES
// =================
app.get("/", (req, res) => {
    return res.redirect("/listings");
});

app.use("/listings", listingRouter);
app.use("/listings/:id/reviews", reviewRouter);
app.use("/", userRouter);

// Test route for errors
app.get("/test-error", (req, res, next) => {
    return next(new ExpressError(404, "Test error page"));
});

// 404 Handler for Unknown Routes
// app.all("*", (req, res, next) => {
//     next(new ExpressError(404, "Page Not Found"));
// });

// =================
// GLOBAL ERROR HANDLER
// =================
app.use((err, req, res, next) => {
    const { statusCode = 500 } = err;
    if (!err.message) err.message = "Something went wrong!";
    return res.status(statusCode).render("error.ejs", { err });
});

// =================
// SERVER START
// =================
app.listen(8080, () => {
    console.log("Server running on http://localhost:8080");
});
