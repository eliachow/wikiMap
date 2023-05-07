DROP TABLE IF EXISTS maps CASCADE;
CREATE TABLE maps (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  created_at TIMESTAMP,
  creator_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  lat INTEGER,
  lon INTEGER
)
