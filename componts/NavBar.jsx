const React = require('react');

function NavBar({ user }) {
  return (
    <div className="container">
      <a className="nav-link" href="/">
        Home
      </a>
      {user ? (
        <>
          <div className="nav__profile">
            <p>Hello, {user.name}</p>
          </div>
          <a className="nav-link" href="/sing/logout">
            Logout
          </a>
        </>
      ) : (
        <>
          <a className="nav-link" href="/sing/in">
            Sign in
          </a>
          <a className="nav-link" href="/sing/up">
            Sign up
          </a>
        </>
      )}
    </div>
  );
}

module.exports = NavBar;
