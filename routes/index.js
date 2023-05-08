const express = require('express');
const { getAllMaps } = require('../db/queries/maps');
const router  = express.Router();

router.get('/', (req, res) => {
  getAllMaps()
  .then(results => {
      res.render('index', {maps: results.rows});
  })
  .catch(err => {
    res
      .status(500)
      console.log("error: ", err);
  })

}); 

module.exports = router;