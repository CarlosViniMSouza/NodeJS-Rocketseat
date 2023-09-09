/* 
// Creating a HTTP server with NodeJS native //
import {createServer} from 'node:http';

const port  = 3030;

const server  = createServer((req, res) => {
    res.write("Hello! ✌️🤓");

    return res.end();
});

server.listen(port);
*/

import { fastify } from "fastify";
import { DatabaseMemory } from "./db-memory.js";

const server = fastify();
const db = new DatabaseMemory();
const port = 3030;

server.get("/", () => {
    const videos = db.list();

    return videos;
});

server.post("/insert", (request, reply) => {
    const { title, description, duration } = request.body;

    db.createVideo({
        title,
        description,
        duration,
    });

    return reply.status(201).send({ message: 'Success to submit Video!' });
});

server.delete("/delete/:id", (request, reply) => {
    const videoID = request.params.id;

    db.delete(videoID);

    return reply.status(204).send();
});

server.put("/modify/:id", (request, reply) => {
    const videoID = request.params.id;
    const { title, description, duration } = request.body;

    db.updateVideo(videoID, { 
            title,
            description,
            duration, 
        });

    return reply.status(204).send();
});

server.listen(
    port, 
    console.log("Server Running! 🚀")
);