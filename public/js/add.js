const addForm = document.querySelector('#addForm');
if (addForm) {
  addForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const { title, entry, tag } = e.target;
    // console.log(title.value, entry.value, tag.value);
    const res = await fetch('/', {
      method: 'post',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        title: title.value,
        body: entry.value,
        tag: tag.value,
      }),
    });
    const data = await res.json();
    if (data.message === 'sucsees') {
      document
        .querySelector('.postsContainer')
        .insertAdjacentHTML('beforeend', data.html);
      addForm.reset();
    }
  });
}
