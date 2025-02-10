const express = require('express');
const app = express();
const PORT = 8080;
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'database.sqlite'
});
const Record = sequelize.define('Record', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});
sequelize.sync()
  .then(() => console.log('База данных синхронизирована'))
  .catch(err => console.error('Ошибка синхронизации базы данных:', err));
app.post('/records', async (req, res) => {
  try {
    const record = await Record.create(req.body);
    res.status(201).json(record);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get('/', (req, res) => {
  res.send('Hello World');
});
app.get('/info', (req, res) => {
  res.json({ surname: 'Овсянников', group: '9ИС-421' });
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
