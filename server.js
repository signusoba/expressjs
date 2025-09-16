const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serves files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Serves files from the 'data' folder
app.use('/data', express.static(path.join(__dirname, 'data')));
// The '/data' part makes the files accessible under the /data URL path

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'about.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'contact.html'));
});

app.get('/blog', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'blog.html'));
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});