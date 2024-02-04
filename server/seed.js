import Database from "better-sqlite3";

const db = new Database("database.db");

db.exec(`CREATE TABLE IF NOT EXISTS guestBook (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT,
    message TEXT

)`);

db.exec(`
INSERT INTO guestBook (username, message) VALUES
('user123', 'testmessage'),
('neoscope', '360 noscope'),
('acite9', 'yeh boi')

`);
