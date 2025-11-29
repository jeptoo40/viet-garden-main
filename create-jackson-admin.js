// Script to create/update jackson admin user with hashed password
// Run this with: node create-jackson-admin.js

const bcrypt = require('bcryptjs');
const mysql = require('mysql2/promise');

async function createJacksonAdmin() {
    const connection = await mysql.createConnection({
        host: 'old19i.h.filess.io',
        port: 3307,
        user: 'viet_garden_meetsaypay',
        password: '3825cfa21841b58fcd27fd6ffda4db6660473676',
        database: 'viet_garden_meetsaypay',
    });

    try {
        console.log('🔄 Connecting to database...');

        // Hash the password
        const password = 'jackson123';
        console.log('🔑 Hashing password...');
        const hashedPassword = await bcrypt.hash(password, 10);

        // Update jackson's password
        const [result] = await connection.execute(
            `UPDATE admins SET password = ? WHERE username = ?`,
            [hashedPassword, 'jackson']
        );

        if (result.affectedRows > 0) {
            console.log('✅ Jackson admin password updated successfully!');
            console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
            console.log('Username: jackson');
            console.log('Password: jackson123');
            console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
        } else {
            console.log('❌ User "jackson" not found. Creating new user...');

            // If update didn't work, insert new user
            const [insertResult] = await connection.execute(
                `INSERT INTO admins (name, username, email, password, role) 
                 VALUES (?, ?, ?, ?, ?)`,
                ['Jackson Admin', 'jackson', 'jackson@vietgarden.com', hashedPassword, 'superadmin']
            );

            console.log('✅ Jackson admin created successfully!');
            console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
            console.log('Username: jackson');
            console.log('Password: jackson123');
            console.log('Email: jackson@vietgarden.com');
            console.log('Role: superadmin');
            console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
        }
    } catch (error) {
        console.error('❌ Error updating jackson admin:', error.message);
        console.error(error);
    } finally {
        await connection.end();
    }
}

createJacksonAdmin();
