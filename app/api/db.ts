// app/api/db.ts
import mysql from "mysql2/promise";

export const pool = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
   port: parseInt(process.env.DB_PORT || '3306'),
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASS || "", // make sure it matches .env
  database: process.env.DB_NAME || "viet_garden",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});
