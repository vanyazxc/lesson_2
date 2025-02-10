const express = require('express');
const { Sequelize } = require('sequelize');
const app = express();
const PORT = 8080;
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'database.sqlite'
});
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Hello World');
});
app.get('/info', (req, res) => {
    res.json({ surname: 'Овсянников', group: '9ИС-421' });
  });
app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
