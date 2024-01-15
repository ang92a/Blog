require('@babel/register');

const express = require('express');
const path = require('path');

// подключаем для формирования html из реакт
const ssr = require('./middleware/ssr');
// подключаем все роуты
const indexRouter = require('./routes/index.routes');

const app = express();
const PORT = 4001;

// мидлварка для прочтения ответов
app.use(express.urlencoded({ extended: 'true' }));
app.use(express.json());
// мидлварка для public
app.use(express.static(path.join(__dirname, 'public')));
// мидлварка для формирования html из реакт / подключить!!
app.use(ssr);
// миделварка для всех роутов / подключить!!
app.use('/', indexRouter);

app.listen(PORT, () => {
  console.log(`Сервер еще работает на ${PORT}`);
});
