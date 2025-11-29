

// app/api/db.ts
import mysql from "mysql2/promise";
import type { Pool } from "mysql2/promise";

// Use globalThis to prevent creating multiple pools on hot reload
declare global {
  // allow a module-level global to hold the pool across hot reloads
  // eslint-disable-next-line no-var
  var mysqlPool: Pool | undefined;
}

let pool: Pool;

if (!globalThis.mysqlPool) {
  globalThis.mysqlPool = mysql.createPool({
    host: process.env.DB_HOST || "old19i.h.filess.io",
    port: parseInt(process.env.DB_PORT || "3307"),
    user: process.env.DB_USER || "viet_garden_meetsaypay",
password: process.env.DB_PASSWORD || "3825cfa21841b58fcd27fd6ffda4db6660473676",

    database: process.env.DB_NAME || "viet_garden_meetsaypay",
    waitForConnections: true,
    connectionLimit: 3, // Files.io allows max 5
    queueLimit: 0,
  });
}

pool = globalThis.mysqlPool!;

export { pool };
   


