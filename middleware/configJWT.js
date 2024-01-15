// информация о типе куки и его шифровании
const configJWT = {
  access: {
    type: 'access',
    expresIn: `${1000 * 60 * 5}`,
  },
  refresh: {
    type: 'refresh',
    expresIn: `${1000 * 60 * 60 * 12}`,
  },
};

module.exports = configJWT;
