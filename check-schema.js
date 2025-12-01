const mysql = require('mysql2/promise');

const dbConfig = {
    host: 'old19i.h.filess.io',
    port: 3307,
    user: 'viet_garden_meetsaypay',
    password: '3825cfa21841b58fcd27fd6ffda4db6660473676',
    database: 'viet_garden_meetsaypay'
};

async function checkSchema() {
    const connection = await mysql.createConnection(dbConfig);

    console.log('--- Bookings Table ---');
    const [bookings] = await connection.query('DESCRIBE bookings');
    console.log(bookings);

    await connection.end();
}

checkSchema();
