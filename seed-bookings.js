const mysql = require('mysql2/promise');

const dbConfig = {
    host: 'old19i.h.filess.io',
    port: 3307,
    user: 'viet_garden_meetsaypay',
    password: '3825cfa21841b58fcd27fd6ffda4db6660473676',
    database: 'viet_garden_meetsaypay'
};

async function seedBookings() {
    const connection = await mysql.createConnection(dbConfig);
    console.log('🌱 Seeding bookings...');

    try {
        await connection.query(`
      INSERT INTO bookings (name, email, phone, date, time, guests, occasion, created_at) VALUES 
      ('John Doe', 'john@example.com', '1234567890', '2024-01-15', '19:00', '2', 'Birthday', '2024-01-15 10:00:00'),
      ('Jane Smith', 'jane@example.com', '0987654321', '2024-02-14', '20:00', '2', 'Anniversary', '2024-02-14 11:00:00'),
      ('Alice Johnson', 'alice@example.com', '1122334455', '2024-03-10', '18:30', '4', 'Dinner', '2024-03-10 09:30:00'),
      ('Bob Brown', 'bob@example.com', '5566778899', '2024-03-20', '19:00', '6', 'Party', '2024-03-20 14:15:00'),
      ('Charlie Davis', 'charlie@example.com', '6677889900', '2024-04-05', '12:00', '3', 'Lunch', '2024-04-05 10:00:00')
    `);
        console.log('✅ Bookings seeded successfully!');
    } catch (error) {
        console.error('❌ Seeding failed:', error);
    } finally {
        await connection.end();
    }
}

seedBookings();
