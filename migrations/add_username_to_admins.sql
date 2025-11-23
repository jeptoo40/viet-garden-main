-- Migration: Add username field to admins table
-- This script adds a username column to the admins table if it doesn't exist

-- Add username column (if it doesn't exist)
ALTER TABLE admins 
ADD COLUMN IF NOT EXISTS username VARCHAR(50) UNIQUE NOT NULL DEFAULT '';

-- Update existing records to have a username based on their email
-- This is a temporary solution - you should update these to proper usernames
UPDATE admins 
SET username = SUBSTRING_INDEX(email, '@', 1)
WHERE username = '' OR username IS NULL;

-- Optional: Create an index on username for faster lookups
CREATE INDEX IF NOT EXISTS idx_username ON admins(username);

-- Verify the changes
SELECT id, username, email, role FROM admins;
