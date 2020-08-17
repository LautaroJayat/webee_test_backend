const checkUserData = async (req, res, next) => {
  const user = req.body;
  //console.log("user!", user);
  if (!user.name) {
    return res
      .status(400)
      .json({ message: "Could not find user name in request" });
  }
  if (!user.password) {
    return res
      .status(400)
      .json({ message: "Could not find user password in request" });
  }

  return next();
};

module.exports = checkUserData;
