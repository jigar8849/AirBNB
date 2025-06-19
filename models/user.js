const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose")

const userSchema = new Schema({
    email : {
        type : String,
        required: true,
    },
});

// in this plug in passportLocalMongoose automaticly create password , add solting and username field in userSchema
userSchema.plugin(passportLocalMongoose); 
module.exports = mongoose.model("User", userSchema);