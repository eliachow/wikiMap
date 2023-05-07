DROP TABLE IF EXISTS points_of_interest CASCADE;
CREATE TABLE points_of_interest (
  id SERIAL PRIMARY KEY NOT NULL,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  image_url VARCHAR(255),
  lat INTEGER,
  lon INTEGER,
  map_id INTEGER REFERENCES maps(id) ON DELETE CASCADE
)