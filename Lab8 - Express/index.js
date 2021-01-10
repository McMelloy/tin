const express = require('express');
var bodyParser = require('body-parser')
const app = express();
var path = require('path');
const Song = require(path.join(__dirname + '/song.js'));

const hostname = '127.0.0.1';
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send('First');
});

app.get('/hello', (req, res) => {
    res.send('Hello World!');
});

app.get('/form', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/formdata', (req, res) => {
    let artist = req.body.artist;
    let album = req.body.album;
    let song = req.body.song;
    let newSong = new Song(artist, album, song);

    res.render('display', {newSong:newSong});
});

app.post('/jsondata', (req, res) => {
    let newSong = new Song(req.body.artist, req.body.album, req.body.song);
    res.render('display', {newSong:newSong});
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });