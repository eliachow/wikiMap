const express = require('express');
const { removeFavMaps } = require('../db/queries/fav_maps');
const router  = express.Router();

//  4. Delete favorite maps
  router.post('/:id/delete', (req, res) => {
    const { id } = req.params;
    const { mapID } = req.body;
    console.log("👉👉mapID: ", mapID);
    removeFavMaps(mapID, id)
    .then(() => {
      res.redirect(`/profile/${id}`);
    }) 
  });


module.exports = router;