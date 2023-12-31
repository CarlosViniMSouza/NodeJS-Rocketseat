import { randomUUID } from "node:crypto";

export class DatabaseMemory {
    #videos = new Map();

    list(search) {
        return Array.from(this.#videos.entries())
        .map((videoInfos) => {
            const videoID = videoInfos[0];
            const infos = videoInfos[1];

            return {
                videoID,
                ...infos,
            }
        })
        .filter(video => {
            if(search) {
                return video.title.includes(search);
            }

            return true;
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
