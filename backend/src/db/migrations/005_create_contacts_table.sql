-- Create contacts table
CREATE TABLE IF NOT EXISTS contacts (
  id SERIAL PRIMARY KEY,
  full_name VARCHAR(100) NOT NULL,
  email VARCHAR(150) NOT NULL,
  subject VARCHAR(250) NOT NULL,
  message TEXT NOT NULL,
  status VARCHAR(50) NOT NULL DEFAULT 'New',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Index for contacts email lookup
CREATE INDEX IF NOT EXISTS idx_contacts_email ON contacts(email);

-- Trigger for auto updated_at
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_trigger WHERE tgname = 'set_updated_at' AND tgrelid = 'contacts'::regclass
  ) THEN
    CREATE TRIGGER set_updated_at
      BEFORE UPDATE ON contacts
      FOR EACH ROW
      EXECUTE FUNCTION update_modified_column();
  END IF;
END;
$$;
