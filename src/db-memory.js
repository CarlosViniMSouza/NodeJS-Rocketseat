import { randomUUID } from "node:crypto";

export class DatabaseMemory {
    #videos = new Map();

    list() {
        return Array.from(this.#videos.values());
    }

    createVideo(video) {
        const videoID = randomUUID();

        this.#videos.set(videoID, video);
    }

    deleteVideo(videoID) {
        this.#videos.delete(videoID);
    }

    updateVideo(videoID, video) {
        this.#videos.set(videoID, video);
    }
}