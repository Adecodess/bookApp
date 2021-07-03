const User = require("../models/user");
const bcrypt = require("bcryptjs");
let password = "admin123";

exports.seedAdmin = () => {
  // check if theres an admin account
  User.findOne({ role: "admin" }, (err, admin) => {
    if (err) throw err;
    if (admin) {
      return "admin account already exists";
    }
    User.create(
      {
        firstName: "book",
        lastName: "goblin",
        username: "Bookgoblin",
        role: "admin",
      },
      (err, user) => {
        if (err) throw err;
        bcrypt.genSalt(10, (err, salt) => {
          if (err) throw err;
          bcrypt.hash(password, salt, (err, hash) => {
            if (err) throw err;
            user.password = hash;
            user.save((err, savedUser) => {
              if (err) throw err;
              return "admin account";
            });
          });
        });
      }
    );
  });
};

// if there is none , create an admin account
