-- Alter inquiries table to add ip_address column if it does not exist
ALTER TABLE inquiries ADD COLUMN IF NOT EXISTS ip_address VARCHAR(100);
