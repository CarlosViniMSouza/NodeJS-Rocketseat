import { randomUUID } from "node:crypto";
import {sql} from "./db.js";

export class DatabasePostgres {
    #videos = new Map();

    list(search) {
        let videos;

        if (search) {
            videos = sql`select * from videos where title ilike`;
        }
    };

    createVideo(video) {
    }

    deleteVideo(videoID) {
    }

    updateVideo(videoID, video) {
    }
}
