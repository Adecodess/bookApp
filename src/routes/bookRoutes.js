const express = require("express");
const router = express.Router();
const BookCtrl = require("../controllers/bookcontrollers");
const {
  authenticateUser,
  checkIfAdmin,
} = require("../middlewares/authentication");

// post request to ?books to create new book
router.post("/books", authenticateUser, checkIfAdmin, BookCtrl.createNewBook);
// Get request to /books to fetch all books
router.get("/books", authenticateUser, BookCtrl.fetchBooks);
// GET request to fecth a singlebook
router.get("/books/:id", authenticateUser, BookCtrl.fetchSingleBook);
// Put request to /books/:id to update a single book
router.put("/books/:id", authenticateUser, BookCtrl.updateSinglebook);
// delete request to /books/:id to delete
router.delete("/books/:id", authenticateUser, BookCtrl.deleteSingleBook);

module.exports = router;
