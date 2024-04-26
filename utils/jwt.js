const jwt = require("jsonwebtoken");

function signJWT(user) {
  const _id = user._id;
  const expiresIn = '1d';
  const payload = {
    sub: _id,
    iat: Date.now(),
  };
  
  const signedToken = jwt.sign(payload, process.env.TOKEN_SECRET, {
    expiresIn: expiresIn,
    algorithm: "HS256",
  });

  return {
    token: "Bearer " + signedToken,
    expires: expiresIn,
  };
}

module.exports.signJWT = signJWT;