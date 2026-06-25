-- Create inquiries table
CREATE TABLE IF NOT EXISTS inquiries (
  id SERIAL PRIMARY KEY,
  full_name VARCHAR(100) NOT NULL,
  organization VARCHAR(150) NOT NULL,
  email VARCHAR(150) NOT NULL,
  inquiry_type VARCHAR(100) NOT NULL,
  message TEXT NOT NULL,
  status VARCHAR(50) NOT NULL DEFAULT 'New',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Index for inquiry type filtering
CREATE INDEX IF NOT EXISTS idx_inquiries_inquiry_type ON inquiries(inquiry_type);

-- Trigger for auto updated_at
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_trigger WHERE tgname = 'set_updated_at' AND tgrelid = 'inquiries'::regclass
  ) THEN
    CREATE TRIGGER set_updated_at
      BEFORE UPDATE ON inquiries
      FOR EACH ROW
      EXECUTE FUNCTION update_modified_column();
  END IF;
END;
$$;
