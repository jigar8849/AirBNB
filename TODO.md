# TODO List for Deployment Error Fixes

- [x] Fix error.ejs template to use err.message instead of message
- [x] Add SSL options to MongoDB connection in app.js to resolve TLS error
- [x] Move server start inside DB connection promise to prevent app from running without DB
- [ ] Add 0.0.0.0/0 to MongoDB Atlas IP whitelist (user action required)
