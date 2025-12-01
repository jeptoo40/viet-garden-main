const mysql = require('mysql2/promise');

const dbConfig = {
    host: 'old19i.h.filess.io',
    port: 3307,
    user: 'viet_garden_meetsaypay',
    password: '3825cfa21841b58fcd27fd6ffda4db6660473676',
    database: 'viet_garden_meetsaypay'
};

async function listTables() {
    const connection = await mysql.createConnection(dbConfig);
    const [rows] = await connection.query('SHOW TABLES');
    console.log(rows);
    await connection.end();
}

listTables();
