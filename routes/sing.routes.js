const router = require('express').Router();
const bcrypt = require('bcrypt');
const SingInPage = require('../componts/SingInPage');
const SingUpPage = require('../componts/SingUpPage');
const { User } = require('../db/models');

const generateTokens = require('../utils/authUtils');
const configJWT = require('../middleware/configJWT');

// запрос на отрисовку страницы регистрация
router.get('/up', (req, res) => {
  const html = res.renderComponent(SingUpPage, { title: 'Регистрация' });
  res.send(html);
});

// запрос на отрисовку страницы вход
router.get('/in', (req, res) => {
  const html = res.renderComponent(SingInPage, { title: 'Вход' });
  res.send(html);
});

// проверка данных на регистрацию
router.post('/up', async (req, res) => {
  try {
    const { name, password } = req.body;
    const user = await User.findOne({ where: { name } });
    if (user) {
      res.json({ message: 'Такой пользлователь уже есть' });
      return;
    }

    const hash = await bcrypt.hash(password, 10);
    const newUser = await User.create({ name, password: hash });

    const { accessToken, refreshToken } = generateTokens({
      user: { id: newUser.id, name: newUser.name },
    });

    // console.log(accessToken, refreshToken, '1111111');

    // устанавливаем куки
    res.cookie('access', accessToken, {
      maxAge: 1000 * 60 * 5,
      httpOnly: true,
    });
    res.cookie('refresh', refreshToken, {
      maxAge: 1000 * 60 * 60 * 12,
      httpOnly: true,
    });

    res.json({ message: 'Вы зарегистрированы' });
  } catch ({ message }) {
    res.json(`Сообщенеи с сервера на регистрацию : ${message}`);
  }
});

// проверка данных на вход
router.post('/in', async (req, res) => {
  try {
    const { name, password } = req.body;
    const user = await User.findOne({ where: { name } });
    const isSame = await bcrypt.compare(password, user.password);
    if (user && isSame) {
      const { accessToken, refreshToken } = generateTokens({
        user: { id: user.id, name: user.name },
      });

      // console.log(accessToken, refreshToken, '1111111');

      // устанавливаем куки
      res.cookie('access', accessToken, {
        maxAge: 1000 * 60 * 5,
        httpOnly: true,
      });
      res.cookie('refresh', refreshToken, {
        maxAge: 1000 * 60 * 60 * 12,
        httpOnly: true,
      });

      res.json({ message: 'Вход успех' });
      return;
    }
    res.json({ message: 'Такого пользователя нет или пароль неверный' });
  } catch ({ message }) {
    res.json(`Сообщенеи с сервера на вход : ${message}`);
  }
});

router.get('/logout', (req, res) => {
  res.clearCookie(configJWT.access.type).clearCookie(configJWT.refresh.type);
  res.redirect('/');
});

module.exports = router;
