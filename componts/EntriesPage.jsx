const React = require('react');
const Layout = require('./Layout');
const EntryPage = require('./EntryPage');
const AddForm = require('./AddForm');

function EntriesPage({ title, data }) {
  return (
    <Layout title={title}>
      <div className="container">
        <AddForm />
        <h1 style={{ textAlign: 'center' }}>Список постов</h1>
        <div className="postsContainer">
          {data.map((entry) => (
            <EntryPage entry={entry} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

module.exports = EntriesPage;
