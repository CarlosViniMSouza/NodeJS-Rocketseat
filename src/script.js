import { fastify } from "fastify";
import { DatabaseMemory } from "./db-memory.js";

const server = fastify();
const db = new DatabaseMemory();
const port = 3030;

server.get("/", (request, reply) => {
    const search = request.query.search;
    const videos = db.list(search);

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

    db.deleteVideo(videoID);

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
