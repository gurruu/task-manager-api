const jwt = require("jsonwebtoken");
const User = require("../models/user");

const auth = async (req, res, next) => {
    
  try {

    const token = req.header("Authorization").replace("Bearer", "").trim(" ");
    // console.log(token)
    const decoded = jwt.verify(token, process.env.SECRET_TOKEN_KEY);
    const user = await User.findById({
      _id: decoded._id,
      "tokens.token": token,
    });
    if(!user){
        throw new Error()
    }
    req.token=token;
    req.user=user
    next()
  } catch (error) {
    //   console.log(error)
    res.status(401).send("please authenticate");
  }
};

module.exports = auth;
