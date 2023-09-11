import { sql } from "./db.js";

sql`
    CREATE TABLE videos (
        title VARCHAR(100),
        description TEXT,
        duration INTEGER
    );
`.then(() => {
    console.log("Table created!");
});
