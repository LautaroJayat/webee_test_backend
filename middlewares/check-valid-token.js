const checkValidCredentials = (req, res, next) => {
  console.log("middleware is working!");
  return next();
};

module.exports = checkValidCredentials;
