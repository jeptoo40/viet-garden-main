const mysql = require('mysql2/promise');

const dbConfig = {
    host: 'old19i.h.filess.io',
    port: 3307,
    user: 'viet_garden_meetsaypay',
    password: '3825cfa21841b58fcd27fd6ffda4db6660473676',
    database: 'viet_garden_meetsaypay'
};

async function migrate() {
    const connection = await mysql.createConnection(dbConfig);
    console.log('🔄 Starting migration...');

    try {
        // 1. Create menu_items table
        console.log('Creating menu_items table...');
        await connection.query(`
      CREATE TABLE IF NOT EXISTS menu_items (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        description TEXT,
        price DECIMAL(10, 2) NOT NULL,
        category VARCHAR(50),
        image_url VARCHAR(255),
        is_available BOOLEAN DEFAULT TRUE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

        // 2. Create team_members table
        console.log('Creating team_members table...');
        await connection.query(`
      CREATE TABLE IF NOT EXISTS team_members (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        role VARCHAR(100) NOT NULL,
        bio TEXT,
        image_url VARCHAR(255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

        // 3. Create orders table for revenue
        console.log('Creating orders table...');
        await connection.query(`
      CREATE TABLE IF NOT EXISTS orders (
        id INT AUTO_INCREMENT PRIMARY KEY,
        customer_name VARCHAR(255),
        total_amount DECIMAL(10, 2) NOT NULL,
        status VARCHAR(50) DEFAULT 'completed',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

        // Seed some initial data if empty
        const [menuCount] = await connection.query('SELECT COUNT(*) as count FROM menu_items');
        if (menuCount[0].count === 0) {
            console.log('🌱 Seeding menu items...');
            await connection.query(`
        INSERT INTO menu_items (name, price, category) VALUES 
        ('Pho Bo', 12.99, 'Main'),
        ('Spring Rolls', 6.99, 'Appetizer'),
        ('Banh Mi', 8.50, 'Main')
      `);
        }

        const [teamCount] = await connection.query('SELECT COUNT(*) as count FROM team_members');
        if (teamCount[0].count === 0) {
            console.log('🌱 Seeding team members...');
            await connection.query(`
        INSERT INTO team_members (name, role) VALUES 
        ('Nguyen Van A', 'Head Chef'),
        ('Tran Thi B', 'Manager')
      `);
        }

        const [orderCount] = await connection.query('SELECT COUNT(*) as count FROM orders');
        if (orderCount[0].count === 0) {
            console.log('🌱 Seeding orders...');
            await connection.query(`
        INSERT INTO orders (total_amount, created_at) VALUES 
        (50.00, NOW()),
        (120.50, NOW() - INTERVAL 1 DAY),
        (75.25, NOW() - INTERVAL 2 DAY)
      `);
        }

        console.log('✅ Migration completed successfully!');

    } catch (error) {
        console.error('❌ Migration failed:', error);
    } finally {
        await connection.end();
    }
}

migrate();
