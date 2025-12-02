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

const dbConfig = {
  host: process.env.DB_HOST || "old19i.h.filess.io",
  port: parseInt(process.env.DB_PORT || "3307"),
  user: process.env.DB_USER || "viet_garden_meetsaypay",
  password: process.env.DB_PASSWORD || "3825cfa21841b58fcd27fd6ffda4db6660473676", // fixed
  database: process.env.DB_NAME || "viet_garden_meetsaypay",
  waitForConnections: true,
  connectionLimit: 3,
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 10000,
  connectTimeout: 10000,
};

if (!globalThis.mysqlPool) {
  console.log("🔄 Creating new MySQL connection pool...");
  console.log("📊 Database Config:", {
    host: dbConfig.host,
    port: dbConfig.port,
    user: dbConfig.user,
    database: dbConfig.database,
    passwordSet: !!dbConfig.password,
  });

  globalThis.mysqlPool = mysql.createPool(dbConfig);

  // Handle pool errors
  globalThis.mysqlPool.on("connection", (connection) => {
    console.log("🔗 New database connection established");

    connection.on("error", (err) => {
      console.error("❌ Database connection error:", err.code);
    });
  });

  // Test the connection
  globalThis.mysqlPool
    .getConnection()
    .then((connection) => {
      console.log("✅ Database connection successful!");
      connection.release();
      return globalThis.mysqlPool!.query("SELECT 1 as test");
    })
    .then(() => {
      console.log("✅ Database query test successful!");
    })
    .catch((error) => {
      console.error("❌ Database connection error:", {
        message: error.message,
        code: error.code,
        errno: error.errno,
        sqlState: error.sqlState,
      });
    });
} else {
  console.log("♻ Reusing existing MySQL connection pool");
}

pool = globalThis.mysqlPool!;

// Helper function to execute queries with retry on connection errors
export async function queryWithRetry(sql: string, params?: any[], maxRetries = 2) {
  let lastError;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      console.log(`🔍 Query attempt ${attempt}/${maxRetries}`);
      const result = await pool.query(sql, params);
      console.log(`✅ Query successful on attempt ${attempt}`);
      return result;
    } catch (error: any) {
      lastError = error;
      console.error(`❌ Query failed on attempt ${attempt}:`, error.code);

      // Retry on connection errors
      if (["ECONNRESET", "ETIMEDOUT", "PROTOCOL_CONNECTION_LOST"].includes(error.code)) {
        if (attempt < maxRetries) {
          console.log(`🔄 Retrying query... (${attempt}/${maxRetries})`);
          await new Promise((resolve) => setTimeout(resolve, 1000));
          continue;
        }
      }

      // Throw other errors immediately
      //some changes
      throw error;
    }
  }

  throw lastError;
}

export { pool };
