const express = require('express');
const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
  res.send('Hello World');
});
app.get('/info', (req, res) => {
  res.json({ surname: 'Овсянников', group: '9ИС-421' });
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
