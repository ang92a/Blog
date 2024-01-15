const postsCont = document.querySelector('.postsContainer');

// если есть контейнер, то добавь слушатель
if (postsCont) {
  postsCont.addEventListener('click', async (e) => {
    // если клик по элементу содержашему класс==btnDel, то сделай что-то
    if (e.target.classList.contains('btnDel')) {
      // closest находитближайшего родителя с классом post и возвращяет его
      const post = e.target.closest('.post');
      // .dateset возвращяет все атрибуты date
      const { id } = post.dataset;
      // отправляем запрос на сервер и дожидаемся результата
      // метод делит не имеет body поэтому используем параметры
      const res = await fetch(`/${id}`, {
        method: 'DELETE',
      });
      // сюда ответ
      const data = await res.json();
      if (data.message === 'success') {
        post.remove();
        return;
      }
      alert(data.message);
    }
  });
}
