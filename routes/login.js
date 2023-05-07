const express = require('express');
const router  = express.Router();
const cookieSession = require('cookie-session');
const { getUserByEmail } = require('../db/queries/users');

// Render login page
router.get('/', (req, res) => {
  res.render('login');
}); 

// Read data from the login form & compare to the database
router.post('/', (req, res) => {
  const { email, password} = req.body;
  getUserByEmail(email)
  .then(result => {
    const userEmail = result.rows[0]['email']
    const userPassword = result.rows[0]['password']
    const userID = result.rows[0]['id']

    //check if userEmail exists
    if(!userEmail) {
          res.status(403).send("Status Code: 403 - Email cannot be found");
    }
    
    // check if (unencrypted) password matches
    if (userPassword !== password) {
      res.status(403).send("Incorrect username or password");
    }

    // if username exists & password matches, redirect to the user's profile page
    req.session.user_id = `${userID}`
    res.redirect(`/profile/${userID}`)
  })
  .catch(error => {
      // Handle any errors that occurred during the database retrieval
      console.log("error: ", error);
      res.status(500).send("Status Code: 500 - Internal Server Error");
    });

})

module.exports = router;