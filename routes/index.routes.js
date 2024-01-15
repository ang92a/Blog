const router = require('express').Router();

// подключаем один конкретный роут
const EntryRouter = require('./entries.routes');
const singInAndUp = require('./sing.routes');

// миделварка для одного конкретного роута
router.use('/', EntryRouter);
router.use('/sing', singInAndUp);

module.exports = router;
