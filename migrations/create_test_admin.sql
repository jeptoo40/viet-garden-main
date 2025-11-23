-- Create a test admin user for login testing
-- Password: admin123 (hashed with bcrypt)

-- First, ensure the username column exists
-- Run the add_username_to_admins.sql migration first if you haven't

-- Insert a test admin user
-- Note: You'll need to hash the password using bcrypt before inserting
-- This is a placeholder - use the Node.js script below to create the user

-- Example admin user structure:
-- INSERT INTO admins (name, username, email, password, role) 
-- VALUES ('Admin User', 'admin', 'admin@vietgarden.com', '$2a$10$hashedpasswordhere', 'super_admin');

-- To create a properly hashed password, run this Node.js code:
-- const bcrypt = require('bcryptjs');
-- const password = 'admin123';
-- const hash = await bcrypt.hash(password, 10);
-- console.log(hash);
