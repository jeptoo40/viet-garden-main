// Script to create a test admin user with hashed password
// Run this with: node create-admin.js

const bcrypt = require('bcryptjs');
const mysql = require('mysql2/promise');
require('dotenv').config();

async function createAdmin() {
    const connection = await mysql.createConnection({
        host: process.env.DB_HOST || 'localhost',
        port: parseInt(process.env.DB_PORT || '3306'),
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASS || '',
        database: process.env.DB_NAME || 'viet_garden',
    });

    try {
        // Hash the password
        const password = 'admin123';
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insert admin user
        const [result] = await connection.execute(
            `INSERT INTO admins (name, username, email, password, role) 
       VALUES (?, ?, ?, ?, ?)
       ON DUPLICATE KEY UPDATE password = VALUES(password)`,
            ['Admin User', 'admin', 'admin@vietgarden.com', hashedPassword, 'super_admin']
        );

        console.log('✅ Admin user created successfully!');
        console.log('Username: admin');
        console.log('Password: admin123');
        console.log('Email: admin@vietgarden.com');
        console.log('Role: super_admin');
    } catch (error) {
        console.error('❌ Error creating admin user:', error.message);
    } finally {
        await connection.end();
    }
}

createAdmin();
