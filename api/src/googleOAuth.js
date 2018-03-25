const { OAuth2Strategy } = require("passport-google-oauth");

module.exports = (passport, config) => {
  passport.serializeUser((user, done) => {
    done(null, user);
  });
  passport.deserializeUser((user, done) => {
    done(null, user);
  });
  passport.use(
    new OAuth2Strategy(
      {
        clientID: config.clientId,
        clientSecret: config.secret,
        callbackURL: config.callbackUrl
      },
      (token, refreshToken, profile, done) => {
        console.log(token);
        console.log(profile);
        return done(null, {
          profile: profile,
          token: token
        });
      }
    )
  );
};
