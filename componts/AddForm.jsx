const React = require('react');

function AddForm() {
  return (
    <form id="addForm" method="post" action="#">
      <label htmlFor="inputFormTitle">Title:</label>
      <input name="title" type="text" id="inputFormTitle" />
      <label name="entry" htmlFor="inputFormEntry">
        Entry:
      </label>
      <input name="entry" type="text" id="inputFormEntry" />
      <label htmlFor="inputFotmTag">Tag:</label>
      <input name="tag" type="text" id="inputFotmTag" />
      <button>Добавить</button>
    </form>
  );
}

module.exports = AddForm;
