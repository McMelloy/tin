const http = require('http');
const url  = require('url');

const hostname = '127.0.0.1';
const port = 3000;
const numReg = /\d+/;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    const urlstring = url.parse(req.url, true);

    if(urlstring.query['a'] == null || urlstring.query['b'] == null) {
        res.write("please provide values");
    } else if(!urlstring.query['a'].match(numReg) || !urlstring.query['b'].match(numReg)) {
        res.write("please provide correct values");
    } else {
        let num1 = Number(urlstring.query['a']);
        let num2 = Number(urlstring.query['b']);

        switch(urlstring.pathname){
            case '/add':
                res.write(`Operation: addition\n`);
                res.write(`Result: ${add(num1, num2)}\n`);
                break;
            case '/sub':
                res.write(`Operation: subtraction\n`);
                res.write(`Result: ${sub(num1, num2)}\n`);
                break;
            case '/mul':
                res.write(`Operation: multiplication\n`);
                res.write(`Result: ${mul(num1, num2)}\n`);
                break;
            case '/div':
                res.write(`Operation: division\n`);
                res.write(`Result: ${div(num1, num2)}\n`); 
                break;
            default:
                res.write("Oops, wrong url");
                break;
        }
    }
    res.end();
});

function add(num1,num2) {
    return num1+num2;
}

function div(num1,num2) {
    if(num2 == 0) {
        return "undefined";
    }
    return num1/num2;
}

function sub(num1,num2) {
    return num1-num2;
}

function mul(num1,num2) {
    return num1*num2;
}

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});