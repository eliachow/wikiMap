DROP TABLE IF EXISTS fav_maps CASCADE;
CREATE TABLE fav_maps (
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  map_id INTEGER REFERENCES maps(id) ON DELETE CASCADE
)