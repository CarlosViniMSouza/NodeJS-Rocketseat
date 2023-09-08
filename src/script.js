import {createServer} from 'node:http';

const port  = 3030;

const server  = createServer((req, res) => {
    res.write("Hello! ✌️🤓");

    return res.end();
});

server.listen(port);
