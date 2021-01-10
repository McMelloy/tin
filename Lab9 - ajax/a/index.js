const express = require('express');
var bodyParser = require('body-parser');
const app = express();
var path = require('path');

const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.post('/calculate', (req, res) => {

    var num1 = parseFloat(req.body.num1);
    var num2 = parseFloat(req.body.num2);

    var operation = req.body.op;

    if (operation === 'add') {
        res.json({ result: (num1 + num2) });
    } else if (operation === 'sub') {
        res.json({ result: (num1 - num2) });
    } else if (operation === 'mul') {
        res.json({ result: (num1 * num2) });
    } else if (operation === 'div') {
        if (num2 === 0) res.json(null); 
        else res.json({ result: (num1 / num2) });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});