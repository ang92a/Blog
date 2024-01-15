const formSingUp = document.querySelector('.formSingUp');

if (formSingUp) {
  formSingUp.addEventListener('submit', async (e) => {
    e.preventDefault();
    const { name, password } = e.target;
    const res = await fetch('/sing/up', {
      method: 'post',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        name: name.value,
        password: password.value,
      }),
    });

    const data = await res.json();
    if (data.message === 'Такой пользлователь уже есть') {
      alert('введите другое имя');
    }
    window.location.assign('/');
  });
}
