const db = require('../connection');

// Query for read favorite_maps by user route
const getFavMapsByUser = (userID) => {
  return db.query(`SELECT DISTINCT fav_maps.*, maps.* 
  FROM maps 
  JOIN fav_maps ON map_id = maps.id 
  WHERE fav_maps.user_id = $1`, [userID])  
}


// Delete from fav_maps list (on profile page)
const removeFavMaps = (mapID, userID) => {
  return db.query(`DELETE FROM fav_maps WHERE map_id = $1 AND user_id = $2;`, [mapID, userID])     
}


module.exports = { 
  getFavMapsByUser,
  removeFavMaps
 };