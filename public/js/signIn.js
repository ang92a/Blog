const formSingIn = document.querySelector('.formSingIn');

if (formSingIn) {
  formSingIn.addEventListener('submit', async (e) => {
    e.preventDefault();
    const { name, password } = e.target;
    const res = await fetch('/sing/in', {
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
    if (data.message === 'Вход успех') {
      window.location.assign('/');
      return;
    }
    alert('Такого пользователя нет или пароль неверный');
  });
}
