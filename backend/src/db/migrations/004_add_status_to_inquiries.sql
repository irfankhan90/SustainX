-- Alter inquiries table to add status column if it does not exist
ALTER TABLE inquiries ADD COLUMN IF NOT EXISTS status VARCHAR(50) NOT NULL DEFAULT 'New';
