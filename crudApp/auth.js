var express = require("express");
var router = express.Router();
var passportFacebook=require('../js/facebook');
var dto =require('../js/dto');
var passport=require('passport');
var { generateToken, sendToken }=require('../js/tokenUtils');

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Please Sign In with: Facebook' });
});

/* LOGOUT ROUTER */
router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

router.get('/facebook', passportFacebook.authenticate('facebook'));

router.post('/facebook/callback',
    passportFacebook.authenticate('facebook-token', { session:false, failureRedirect: 'http://localhost:8080/' }),
      function(req, res,next) {
        if(!req.user){
          return res.send(401, 'User Not Authenticated');
        }
        req.auth={
          id:req.user.id
        }
        next();
      }, generateToken, sendToken);

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
      res.redirect('http://localhost:8080');
  }

module.exports=router;