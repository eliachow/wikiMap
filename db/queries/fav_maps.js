const db = require('../connection');

// 1. Query for read favorite_maps by user route
const getFavMapsByUser = (userID) => {
  return db.query(`SELECT DISTINCT fav_maps.*, maps.* 
  FROM maps 
  JOIN fav_maps ON map_id = maps.id 
  WHERE fav_maps.user_id = $1`, [userID])  
}

module.exports = { getFavMapsByUser };