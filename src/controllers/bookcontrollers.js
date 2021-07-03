const Book = require("../models/book");

exports.createNewBook = (req, res) => {
  // retrieve new book details from req.body

  Book.create(
    {
      ...req.body,
    },
    (err, newBook) => {
      if (err) {
        return res.status(500).json({ message: err });
      } else {
        return res.status(200).json({ message: "new book created", newBook });
      }
    }
  );
};

exports.fetchBooks = (req, res) => {
  // check req.query for filter
  let conditions = {};
  if (req.query.category) {
    conditions.category = req.query.category;
  }
  if (req.query.author) {
    conditions.author = req.query.author;
  }

  // fecth all books
  Book.find(conditions, (err, books) => {
    if (err) {
      return res.status(500).json({ message: err });
    } else {
      return res.status(200).json({ books });
    }
  });
};
exports.fetchSingleBook = (req, res) => {
  Book.findById(req.params.id, (err, book) => {
    if (err) {
      return res.status(500).json({ message: err });
    } else if (!book) {
      return res.status(404).json({ message: "book not found" });
    } else {
      return res.status(200).json({ book });
    }
  });
};

exports.updateSinglebook = (req, res) => {
  Book.findByIdAndUpdate(
    req.params.id,
    {
      title: req.body.title,
      category: req.body.category,
      author: req.body.author,
    },
    (err, book) => {
      if (err) {
        return res.status(500).json({ message: err });
      } else if (!book) {
        return res.status(404).json({ message: "book not found" });
      } else {
        book.save((err, savedBook) => {
          if (err) {
            return res.status(500).json({ message: err });
          } else {
            return res
              .status(200)
              .json({ message: "book updated suceesfully" });
          }
        });
      }
    }
  );
};

exports.deleteSingleBook = (req, res) => {
  Book.findByIdAndDelete(req.params.id, (err, book) => {
    if (err) {
      return res.status(500).json({ message: err });
    } else if (!book) {
      return res.status(404).json({ message: "book not found" });
    } else {
      return res.status(200).json({ message: "book deleted successfully" });
    }
  });
};
