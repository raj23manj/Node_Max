const fs = require('fs');

const requestHandler = (req, res) => {

    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title><head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }

    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log('chunk');
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end', () => { // without return here thrws error
            console.log('parsed chunk');
            const parsedBody = Buffer.concat(body).toString(); // buffer bus
            const messge = parsedBody.split('=')[1];
            console.log(parsedBody);
            //fs.writeFileSync('message.txt', messge);
            fs.writeFile('message.txt', messge, (err) => {
                res.statusCode = 302;
                res.setHeader('Location', '/demo');
                return res.end();
            });
            // throws error
            // res.statusCode = 302;
            // res.setHeader('Location', '/');
            // return res.end();
        });

        //res.writeHead(302, {})

        // res.statusCode = 302;
        // res.setHeader('Location', '/');
        // return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello from my node js server</h1></body>')
    res.write('</html>');
    res.end();
};

//module.exports = requestHandler; // global Object
module.exports = {
    handler: requestHandler,
    someText: 'Some text'
};

// module.exports.handler = requestHandler;
// module.exports.someText = 'someText';

// shortcut
// module.handler = requestHandler;
// module.someText = 'someText';