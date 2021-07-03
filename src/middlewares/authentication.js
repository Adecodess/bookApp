const { decodeToken } = require("../services/jwtService");

exports.authenticateUser = (req, res, next) => {
  // check if therrs an authorization token
  if (!req.headers.authorization) {
    return res.status(401).json({ message: "authorization header required " });
  }
  let splittedHeader = req.headers.authorization.split(" ");
  console.log(splittedHeader);
  if (splittedHeader[0] !== "Bearer") {
    return res
      .status(402)
      .json({ message: "authorization format is Bearer <token>" });
  }
  let token = splittedHeader[1];
  // decode token
  let decodedToken = decodeToken(token);
  // check if token is valid

  if (!decodedToken) {
    return res
      .status(403)
      .json({ message: "invalid authorization, please login" });
  }
  // allow user to continue the request
  console.log(decodedToken);
  req.user = decodedToken;
  next();
};

exports.checkIfAdmin = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res
      .status(401)
      .json({ message: "this route is restricted to admin users" });
  }
  return next();
};
