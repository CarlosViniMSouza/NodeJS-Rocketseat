/*
import {createServer} from 'node:http';

const port  = 3030;

const server  = createServer((req, res) => {
    res.write("Hello! ✌️🤓");

    return res.end();
});

server.listen(port);
*/

import { fastify } from "fastify";

const server = fastify();

server.get("/", (req, res) => {
    return null;
});

server.post("/insert", (req, res) => {
    return null;
});

server.delete("/delete/:id", (req, res) => {
    return null;
});

server.put("/modify/:id", (req, res) => {
    return null;
});