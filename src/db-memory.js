import { randomUUID } from "node:crypto";

export class DatabaseMemory {
    #videos = new Map();

    list() {
        return Array.from(this.#videos.entries()).map((videoInfos) => {
            const videoID = videoInfos[0];
            const infos = videoInfos[1];

            return {
                videoID,
                ...infos,
            }
        });
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