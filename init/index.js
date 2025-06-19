const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

main()
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.log("❌ MongoDB connection error:", err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/AirBNB");
}

const initDB = async () => {
  await Listing.deleteMany({});

  const ownerId = new mongoose.Types.ObjectId("6853e7d8c1deb7e06e405d02");

  const listingsWithOwner = initData.data.map((obj) => ({
    ...obj,
    owner: ownerId,
  }));

  await Listing.insertMany(listingsWithOwner);

  console.log("✅ Listings inserted with owner field");
};

initDB();
