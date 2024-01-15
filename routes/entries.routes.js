const router = require('express').Router();
const EntriesPage = require('../componts/EntriesPage');
const EntryPage = require('../componts/EntryPage');

const { EntryTag, Entry, Tag } = require('../db/models');

// все записи
router.get('/', async (req, res) => {
  const data = await Entry.findAll({
    order: [['id', 'ASC']],
    // raw: true,
    include: {
      model: EntryTag,
      include: Tag,
    },
  });
  const html = res.renderComponent(EntriesPage, { title: 'title', data });
  // console.log(data);
  res.send(html);
});

// подробнее
router.get('/:paramId', async (req, res) => {
  const { paramId } = req.params;
  console.log(paramId, 'paramId');
  const entry = await Entry.findOne({
    where: { title: paramId },
    raw: true,
  });
  // console.log(entry.id, 'entryId');
  const html = res.renderComponent(EntryPage, { title: 'title', entry });
  res.send(html);
});

// добавление записи
router.post('/', async (req, res) => {
  try {
    const { title, body, tag } = req.body;
    const newEntry = await Entry.create({ title, body });
    // console.log(newEntry);
    const html = res.renderComponent(
      EntryPage,
      { entry: newEntry },
      { doctype: false }
    );
    // console.log(html);
    res.json({
      message: 'sucsees',
      html,
    });
  } catch ({ message }) {
    console.log({ message });
  }
});

// удаление записи
router.delete('/:paramId', async (req, res) => {
  const { paramId } = req.params;
  // destroy возвращяет количество удаленных
  const result = await Entry.destroy({ where: { id: paramId } });
  if (result > 0) {
    res.json({ message: 'success' });
    return;
  }
  res.json({ message: 'false' });
});

module.exports = router;
