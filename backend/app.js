const express = require('express');
const session = require('express-session');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/post', (req, res) => {
    res.status(200).json([
        {
            'name' : 'Anirudh',
            'age' : 35
        }
    ]);
});

app.get('/post/:id', (req, res) => {
    res.status(200).json({
        'name' : 'Iqra Aziz',
        'age' : 22
    });
});

app.post('/login', (req, res) => {
    res.type('html')
    res.send('Successfully logged in!')
});

app.get('/logout', (req, res) => {
    res.send('Successfully logged out!')
});

const PORT = 3000;
app.listen(PORT, () => {
    // console.log(`Server started at port: ${PORT}`);
});

module.exports = app;