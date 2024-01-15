const React = require('react');
const Layout = require('./Layout');

function SingInPage({ title }) {
  return (
    <Layout title={title}>
      <div className="container">
        <h1>Вход</h1>
        <form action="#" className="formSingIn">
          <input type="text" name="name" />
          <input type="text" name="password" />
          <button className="btnSingIn">Вход</button>
        </form>
      </div>
    </Layout>
  );
}

module.exports = SingInPage;
