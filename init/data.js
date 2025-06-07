const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 1500,
    location: "Malibu",
    country: "United States",
  },
  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 1200,
    location: "New York City",
    country: "United States",
  },
  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 1000,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Historic Villa in Tuscany",
    description:
      "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 2500,
    location: "Florence",
    country: "Italy",
  },
  {
    title: "Secluded Treehouse Getaway",
    description:
      "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 800,
    location: "Portland",
    country: "United States",
  },
  {
    title: "Beachfront Paradise",
    description:
      "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 2000,
    location: "Cancun",
    country: "Mexico",
  },
  {
    title: "Rustic Cabin by the Lake",
    description:
      "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
  },
   {
    title: "Luxury Penthouse with City Views",
    description:
      "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 3500,
    location: "Los Angeles",
    country: "United States",
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    description:
      "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    image: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
  },
  {
    title: "Safari Lodge in the Serengeti",
    description:
      "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 4000,
    location: "Serengeti National Park",
    country: "Tanzania",
  },
  {
    title: "Historic Canal House",
    description:
      "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
    image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 1800,
    location: "Amsterdam",
    country: "Netherlands",
  },
  {
    title: "Private Island Retreat",
    description:
      "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
    image: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 10000,
    location: "Fiji",
    country: "Fiji",
  },
  {
    title: "Charming Cottage in the Cotswolds",
    description:
      "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
    image: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 1200,
    location: "Cotswolds",
    country: "United Kingdom",
  },
  {
    title: "Historic Brownstone in Boston",
    description:
      "Step back in time in this elegant historic brownstone located in the heart of Boston.",
    image: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 2200,
    location: "Boston",
    country: "United States",
  },
    {
    title: "Urban Studio Near Central Park",
    description:
      "A cozy and convenient studio apartment just steps away from Central Park and major attractions.",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 1100,
    location: "New York City",
    country: "United States",
  },
  {
    title: "Beach House with Stunning Sunset Views",
    description:
      "Relax and enjoy breathtaking sunsets from this spacious beach house located right on the shore.",
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 2700,
    location: "Santa Monica",
    country: "United States",
  },
  {
    title: "Countryside Farmhouse Retreat",
    description:
      "Escape the city and enjoy peaceful countryside living in this charming farmhouse surrounded by nature.",
    image: "https://images.unsplash.com/photo-1486308510493-cb7b5e07c999?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 950,
    location: "Tuscany",
    country: "Italy",
  },
  {
    title: "Luxury Apartment in Paris",
    description:
      "Experience the romance of Paris in this modern luxury apartment located in the heart of the city.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 3200,
    location: "Paris",
    country: "France",
  },
  {
    title: "Tropical Villa with Private Pool",
    description:
      "Enjoy tropical breezes and privacy in this villa featuring a private pool and lush gardens.",
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 4500,
    location: "Bali",
    country: "Indonesia",
  },
  {
    title: "Sustainable Eco Lodge",
    description:
      "Stay green in this eco-friendly lodge built with sustainable materials and powered by solar energy.",
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 1300,
    location: "Costa Rica",
    country: "Costa Rica",
  },
  {
    title: "Downtown Condo with Skyline Views",
    description:
      "Enjoy spectacular skyline views from this sleek downtown condo, close to restaurants and nightlife.",
    image: "https://images.unsplash.com/photo-1535464931774-d08f01355a0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 2100,
    location: "Chicago",
    country: "United States",
  },
   {
    title: "Charming Cottage in the Cotswolds",
    description:
      "Quaint and cozy cottage surrounded by the rolling hills of the English countryside.",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 1400,
    location: "Cotswolds",
    country: "United Kingdom",
  },
  {
    title: "Penthouse Suite with Ocean Views",
    description:
      "Luxurious penthouse with panoramic ocean views and modern amenities in a vibrant city.",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 4800,
    location: "Miami",
    country: "United States",
  },
  {
    title: "Cozy Cabin in the Canadian Rockies",
    description:
      "Rustic cabin surrounded by stunning mountain landscapes, perfect for winter sports lovers.",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 1100,
    location: "Banff",
    country: "Canada",
  },
  {
    title: "Minimalist Apartment in Tokyo",
    description:
      "Sleek and modern apartment located in the heart of Tokyo, close to all major attractions.",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 1700,
    location: "Tokyo",
    country: "Japan",
  },
  {
    title: "Traditional Ryokan with Hot Springs",
    description:
      "Experience authentic Japanese culture and relax in natural hot springs at this traditional ryokan.",
    image:
      "https://images.unsplash.com/photo-1560185127-68c3cc1d7f2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 2200,
    location: "Hakone",
    country: "Japan",
  },
  {
    title: "Sunny Villa with Garden and BBQ",
    description:
      "Spacious villa featuring a beautiful garden and BBQ area, ideal for family gatherings.",
    image:
      "https://images.unsplash.com/photo-1505691723518-36a9b45b7a5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 2800,
    location: "Barcelona",
    country: "Spain",
  },
  {
    title: "Loft Apartment in Berlin",
    description:
      "Industrial-style loft apartment in a trendy Berlin neighborhood, close to art galleries and cafes.",
    image:
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 1300,
    location: "Berlin",
    country: "Germany",
  },
   {
    title: "Sunny Desert Oasis",
    description:
      "Relax in this peaceful desert home with a private pool and stunning sunset views.",
    image:
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 1600,
    location: "Palm Springs",
    country: "United States",
  },
  {
    title: "Elegant Parisian Apartment",
    description:
      "Chic and stylish apartment located in the heart of Paris, just steps from famous landmarks.",
    image:
      "https://images.unsplash.com/photo-1494522358652-1a2d442ee0a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 2100,
    location: "Paris",
    country: "France",
  },
  {
    title: "Seaside Bungalow",
    description:
      "Cozy bungalow steps from the beach, perfect for a quiet coastal retreat.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 900,
    location: "Byron Bay",
    country: "Australia",
  },
  {
    title: "Luxury Ski Chalet",
    description:
      "Experience the ultimate ski holiday in this luxurious chalet with breathtaking mountain views.",
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 3500,
    location: "Chamonix",
    country: "France",
  },
  {
    title: "Urban Studio in Seoul",
    description:
      "Compact and convenient studio apartment in Seoul’s bustling city center.",
    image:
      "https://images.unsplash.com/photo-1502672023488-70e25813eb80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 850,
    location: "Seoul",
    country: "South Korea",
  },
  {
    title: "Historic Brownstone",
    description:
      "Stay in this charming historic brownstone with period details and modern comforts.",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 1800,
    location: "Boston",
    country: "United States",
  },
  {
    title: "Tropical Villa with Infinity Pool",
    description:
      "Luxurious villa with an infinity pool overlooking the tropical rainforest.",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 4000,
    location: "Bali",
    country: "Indonesia",
  },
];
module.exports = { data: sampleListings };