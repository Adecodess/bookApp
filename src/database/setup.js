// setup mongoose
const mongoose = require("mongoose");
const connectionString = process.env.DB_URL;

module.exports = () => {
  mongoose.connect(
    connectionString,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    },
    (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("database connection suceesful");
      }
    }
  );
};
