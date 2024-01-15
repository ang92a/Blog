const React = require('react');

function Layout({ title, children }) {
  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        <link rel="stylesheet" href="/css/style.css" />
        <script defer src="/js/add.js" />
        <script defer src="/js/delete.js" />
      </head>
      <body>{children}</body>
    </html>
  );
}

module.exports = Layout;
