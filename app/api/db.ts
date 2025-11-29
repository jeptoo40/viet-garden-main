import mysql from "mysql2/promise";
import type { Pool } from "mysql2/promise";

// Use globalThis to prevent creating multiple pools on hot reload
declare global {
  var mysqlPool: Pool | undefined;
}

const dbConfig = {
  host: process.env.DB_HOST || "old19i.h.filess.io",
  port: parseInt(process.env.DB_PORT || "3307"),
  user: process.env.DB_USER || "viet_garden_meetsaypay",
  password: process.env.DB_PASSWORD || "3825cfa21841b58fcd27fd6ffda4db6660473676",
  database: process.env.DB_NAME || "viet_garden_meetsaypay",
  waitForConnections: true,
  connectionLimit: 3,
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 10000,
  connectTimeout: 10000,
};

// Only create a new pool if it doesn’t already exist
if (!globalThis.mysqlPool) {
  console.log("🔄 Creating new MySQL connection pool...");
  globalThis.mysqlPool = mysql.createPool(dbConfig);

  globalThis.mysqlPool.on("connection", (connection) => {
    connection.on("error", (err) => console.error("❌ DB connection error:", err.code));
  });

  // Optional: test the connection
  globalThis.mysqlPool
    .getConnection()
    .then((conn) => {
      console.log("✅ DB connection successful!");
      conn.release();
    })
    .catch((err) => console.error("❌ DB connection failed:", err));
}

// **Use the global pool**
const pool: Pool = globalThis.mysqlPool!;

// Helper function for queries with retry
export async function queryWithRetry(sql: string, params?: any[], maxRetries = 2) {
  let lastError;
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await pool.query(sql, params);
    } catch (error: any) {
      lastError = error;
      if (["ECONNRESET", "ETIMEDOUT", "PROTOCOL_CONNECTION_LOST"].includes(error.code) && attempt < maxRetries) {
        await new Promise((r) => setTimeout(r, 1000));
        continue;
      }
      throw error;
    }
  }
  throw lastError;
}

export { pool };
