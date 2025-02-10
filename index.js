const express = require('express');
const app = express();
const PORT = 8080;
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('zxczxc', 'zxczxc', 'zxczxc', {
    host: 'localhost',
    dialect: 'postgres'
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
app.use(express.json());
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
app.delete('/records/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const record = await Record.destroy({ where: { id } });
        if (!record) {
            return res.status(404).json({ message: 'Запись не найдена' });
        }
        res.status(204).send();
    } catch (error) {
        
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});
