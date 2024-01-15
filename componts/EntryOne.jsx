const React = require('react');

function EntryOne({ entry }) {
  return (
    <div className="post" data-id={entry.id}>
      <div className="post__content">
        <strong>
          {entry.title} &rarr;
          <a href={`/${entry.title}`}>more info</a>
        </strong>
        <div>{entry.body}</div>
        <div>Tags:</div>
      </div>
      <button className="btnDel">удалить</button>
    </div>
  );
}

module.exports = EntryOne;
