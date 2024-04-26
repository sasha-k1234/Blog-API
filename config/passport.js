const User = require("../models/user");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.TOKEN_SECRET,
  algorithms: ["HS256"],
};

module.exports = (passport) => {
  passport.use(
    new JwtStrategy(options, (payload, done) => {
      User.findOne({ _id: payload.sub })
        .then((user) => {
          if (user) {
            return done(null, user);
          } else {
            return done(null, false);
          }
        })
        .catch((err) => {
          done(err, null);
        });
    })
  );
};
