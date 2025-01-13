import express from 'express';
import dbPromise from './database.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Sample route
app.get('/', (req, res) => {
    res.send('API is running');
});

// Route to get all properties
app.get('/properties', async (req, res) => {
    const db = await dbPromise;
    const properties = await db.all('SELECT * FROM properties');
    res.json(properties);
});

// Route to add a new property
app.post('/properties', async (req, res) => {
    const { title, description, price } = req.body;
    const db = await dbPromise;
    const result = await db.run('INSERT INTO properties (title, description, price) VALUES (?, ?, ?)', [title, description, price]);
    res.json({ id: result.lastID, title, description, price });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
