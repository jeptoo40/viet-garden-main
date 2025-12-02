const mysql = require('mysql2/promise');
const bcrypt = require('bcryptjs');

const dbConfig = {
    host: 'old19i.h.filess.io',
    port: 3307,
    user: 'viet_garden_meetsaypay',
    password: '3825cfa21841b58fcd27fd6ffda4db6660473676',
    database: 'viet_garden_meetsaypay'
};

async function resetAdmin() {
    console.log('🔄 Connecting to database...');
    const connection = await mysql.createConnection(dbConfig);
    console.log('✅ Connected!');

    try {
        const username = 'jackson';
        const password = '@Manager123';
        const email = 'jackson@example.com'; // Placeholder email

        console.log(`🔐 Hashing password for user: ${username}`);
        const hashedPassword = await bcrypt.hash(password, 10);

        // Check if user exists
        const [rows] = await connection.execute(
            'SELECT * FROM admins WHERE username = ?',
            [username]
        );

        if (rows.length > 0) {
            console.log('👤 User exists. Updating password...');
            await connection.execute(
                'UPDATE admins SET password = ? WHERE username = ?',
                [hashedPassword, username]
            );
            console.log('✅ Password updated successfully!');
        } else {
            console.log('👤 User does not exist. Creating new admin...');
            await connection.execute(
                'INSERT INTO admins (username, password, email, role, name) VALUES (?, ?, ?, ?, ?)',
                [username, hashedPassword, email, 'superadmin', 'Jackson Admin']
            );
            console.log('✅ New admin created successfully!');
        }

    } catch (error) {
        console.error('❌ Error:', error);
    } finally {
        await connection.end();
        console.log('👋 Connection closed');
    }
}

resetAdmin();
