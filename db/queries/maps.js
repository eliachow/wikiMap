const db = require('../connection');


const getAllMaps = () => {
  return db.query(`SELECT * FROM maps`)
}


const getMapsByCreatorID = (creatorID) => {
  return db.query(`SELECT * FROM maps WHERE creator_id = ${creatorID}`)
}


module.exports = { 
  getAllMaps,
  getMapsByCreatorID
 };