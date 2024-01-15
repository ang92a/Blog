const React = require('react');
const Layout = require('./Layout');
const Entry = require('./EntryOne');
const AddForm = require('./AddForm');

function EntriesPage({ title, data, user }) {
  return (
    <Layout title={title} user={user}>
      <div className="container">
        <AddForm />
        <h1 style={{ textAlign: 'center' }}>Список постов</h1>
        <div className="postsContainer">
          {data.map((entry) => (
            <Entry entry={entry} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

module.exports = EntriesPage;
