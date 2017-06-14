const express = require('express');

var app = express();

app.get('/', (req, res) => {
    // res.send('<h1>Hello express!</h1>');

    res.send({
        name: 'Andy',
        hobbies: [
            'Rugby',
            'Gym'
        ]
    })
});


app.get('/about', (req, res) => {
    res.send('About Page');
});

app.get('/bad', (req, res) => {
    res.send({
        error: 'Error handling request'
    });
});


app.listen(3000);