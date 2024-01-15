const jwt = require('jsonwebtoken');
const configJWT = require('../middleware/configJWT');

// функция генирации токена, принимает в себя полезную нагрузку
const generateTokens = (payload) => ({
  accessToken: jwt.sign(payload, 'A', {
    expiresIn: configJWT.access.expresIn,
  }),
  refreshToken: jwt.sign(payload, 'R', {
    expiresIn: configJWT.refresh.expresIn,
  }),
});

module.exports = generateTokens;
