#Book Store Application

**FEATURES**

- store owner can
  -Create books
  -Fetch books
  -Update books
  -Delete books
  -Search for books

**TODO**

- Create routes
  -register route - Create a new User - Hash user's password
  -Create a token for user
  -send token to user

  -login route
  -check if user exits - compare user's password with stored hash
  -create a token
  -send token to user

  - authenticate book routes (GET)
     <!-- SEEDING -->
  - role based authentication

<!-- ENV -->

-use enviroment variables
-refactor code

- Update folder structure
- install nodemon

src
-> controllers -> contsains request and response functions
-> database -> database setup and connection and database connection
-> models -> database schemas files
-> routes -> application routes
-> index.js -> entry file
views
tests
config
middlewares
utilities

- model.find -> fetch multiple documents
- model.findOne -> fetch single document
- model.findById -> fetch single document by id
-
- // to update a model
  model.findOneandUpdate
  model.findByIdndUpdate

  // to delete a model
  model.findOneAndDelete
  model.findByAndDelete
  model.findOneAndRemove
  model.findByIdAndRemove

  // Get request to /books/:id to fetch a single book
  // app.get("/books/:id", (req, res) => {
  // Book.findOne({ \_id: req.params.id }, (err, book) => {
  // if (err) {
  // return res.status(500).json({ message: err });
  // } else if (!book) {
  // return res.status(404).json({ message: "book not found" });
  // } else {
  // return res.status(200).json({ book });
  // }
  // });
  // });
