import { createConnection } from 'mysql';
const db = createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database:"reazon_dbh",
});

export default db;