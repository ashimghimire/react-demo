var passport = require('passport')
  , FacebookTokenStrategy = require('passport-facebook-token');
var mysql=require('./connection');
const connection=require('./connection');
const {Users}=require('./UserSchema');
passport.use(new FacebookTokenStrategy({
    clientID: "723995467990366",
    clientSecret: "a0f59ba7734dc0cd4863aa2dd4e5839c"
  },
	function(accessToken, refreshToken, profile, done) {
		var user = {profile, accessToken};
		Users.findOne({facebook_id:profile.id}, function(err, validUser){
		 done(null, user.profile.id);
		});	
	}
));

module.exports = passport;