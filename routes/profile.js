const express = require('express');
const { getFavMapsByUser } = require('../db/queries/fav_maps');
const router  = express.Router();

// Render user's profile page
router.get('/:id', (req, res) => {
  const { id }= req.params;
  /**option to use templateVars:
   * const templateVars = {}
   */
  getFavMapsByUser(id)
  .then(data => {
    // send object list of fav maps to profile.ejs file by userID
      res.render('profile', {favMaps: data.rows});
  })
  .catch(err => {
      res
        .status(500)
        // need to create error ejs page - render error page: 
        // .render('error', {
        //   message: 'Something went wrong'
        // });
        console.log("error: ", err);
     })

}); 

module.exports = router;