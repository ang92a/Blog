const router = require('express').Router();
const SingInPage = require('../componts/SingInPage');
const SingUpPage = require('../componts/SingUpPage');

router.get('/up', (req, res) => {
  const html = res.renderComponent(SingUpPage, { title: 'Регистрация' });
  res.send(html);
});

router.get('/in', (req, res) => {
  const html = res.renderComponent(SingInPage, { title: 'Вход' });
  res.send(html);
});

module.exports = router;
