-- Alter inquiries table to add phone column if it does not exist
ALTER TABLE inquiries ADD COLUMN IF NOT EXISTS phone VARCHAR(50);
