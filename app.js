const express = require("express");
const mongoose = require("mongoose");

const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");

// initializig app
const app = express();

// Db config
const db = require("./config/keys").mongoURI;
// connect to database(mongoDb)
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB connected..."))
  .catch(err => console.log(err));

// Get ROUTES
app.get("/", (req, res) => {
  res.send("WELCOME");
});

// Use routes
app.use('/api/users', users);
app.use('/api/posts', posts);
app.use('/api/profile', profile);

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Server started at port:${port}`);
});
