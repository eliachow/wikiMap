const express = require('express');
const { getFavMapsByUser, addFavMaps } = require('../db/queries/fav_maps');
const { getMapsByCreatorID } = require('../db/queries/maps');
const router  = express.Router();


// Render user's profile page
router.get('/:id', (req, res) => {
  const { id }= req.params;
  /**option to use templateVars:
   * const templateVars = {}
   */
  Promise.all([
    getFavMapsByUser(id),
    getMapsByCreatorID(id)
  ])
  .then(([favMapsData, creatorMapsData]) => {
    const favMaps = favMapsData.rows;
    const creatorMaps = creatorMapsData.rows;
    console.log("👉👉👉favMaps: ", favMaps);
    console.log("👉👉👉creatorMaps: ", creatorMaps)

    res.render('profile', { favMaps, creatorMaps });
  })
  .catch(err => {
      res
        .status(500)
        .send("Internal Server Error")
        // need to create error ejs page - render error page: 
        // .render('error', {
        //   message: 'Something went wrong'
        // });
        console.log("error: ", err);
     })

}); 


// Add favorite maps
router.post('/:id', (req, res) => {
  const { id } = req.params;
  const { mapID } = req.body;
  addFavMaps(mapID, id)
  .then(() => {
    res.redirect(`/profile/${id}`);
  })
  .catch(err => {
    res
    .status(500)
    console.log("error: ", err);
  })
})


module.exports = router;