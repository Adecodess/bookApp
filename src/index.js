const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT;
const dbSetup = require("./database/setup");

// require routes
const bookRoutes = require("./routes/bookRoutes");
const authRoutes = require("./routes/authRoutes");

// initialize express middleware
app.use(express.json());

// seeders
const { seedAdmin } = require("./seeders/admin");
// console.log(seedAdmin());

// setup databse
dbSetup();

app.use("/auth", authRoutes);
app.use(bookRoutes);

app.listen(port, () => {
  console.log(`app listening on ${port}`);
});
