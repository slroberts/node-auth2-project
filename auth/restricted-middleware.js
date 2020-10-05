const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET;

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization
      ? req.headers.authorization.split(' ')[1]
      : '';

    if (token) {
      jwt.verify(token, secret, (err, decodedToken) => {
        if (err) {
          next({
            apiCode: 401,
            apiMessage: 'You shall not pass!',
          });
        } else {
          req.decodedToken = decodedToken;
          next();
        }
      });
    } else {
      next({
        apiCode: 401,
        apiMessage: 'You shall not pass!',
      });
    }
  } catch (err) {
    next({
      apiCode: 500,
      apiMessage: 'Error validating credentials',
      ...err,
    });
  }
};
