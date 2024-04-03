const { errorConstants } = require("../errorConstants.js");
const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  switch (statusCode) {
    case errorConstants.VALIDATION_ERROR:
      res.json({
        title: "Validation Error",
        message: err.message,
        stackTrace: err.stackTrace,
      });
    case errorConstants.UNAUTHORIZED:
      res.json({
        title: "UnAuthorized",
        message: err.message,
        stackTrace: err.stackTrace,
      });
    case errorConstants.FORBIDDEN:
      res.json({
        title: "Forbidden",
        message: err.message,
        stackTrace: err.stackTrace,
      });
    case errorConstants.NOT_FOUND:
      res.json({
        title: "Not Found",
        message: err.message,
        stackTrace: err.stackTrace,
      });
    case errorConstants.SERVER_ERROR:
      res.json({
        title: "Server Error",
        message: err.message,
        stackTrace: err.stackTrace,
      });
    default:
      console.log("No Errors");
      break;
  }
};

module.exports = errorHandler;
