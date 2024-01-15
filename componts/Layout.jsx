const React = require('react');
const NavBar = require('./NavBar');

function Layout({ title, children, user }) {
  console.log(user, 222222);
  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        <link rel="stylesheet" href="/css/style.css" />
        <script defer src="/js/add.js" />
        <script defer src="/js/delete.js" />
        <script defer src="/js/signIn.js" />
        <script defer src="/js/signUp.js" />
      </head>
      <body>
        <NavBar user={user} />
        {children}
      </body>
    </html>
  );
}

module.exports = Layout;
