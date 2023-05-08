const db = require('../connection');

const getAllMaps = () => {
  return db.query(`SELECT * FROM maps`)
}

module.exports = { getAllMaps };