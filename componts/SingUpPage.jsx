const React = require('react');
const Layout = require('./Layout');

function SingUpPage({ title }) {
  return (
    <Layout title={title}>
      <div className="container">
        <h1>Регистрация</h1>
        <form action="#" className="formSingUp">
          <input type="text" name="name" />
          <input type="text" name="password" />
          <button className="btnSingUp">Авторизация</button>
        </form>
      </div>
    </Layout>
  );
}

module.exports = SingUpPage;
