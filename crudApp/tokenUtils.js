var jwt = require('jsonwebtoken');
var createToken = function(auth) {
    return jwt.sign({
            id: auth.id
        }, 'my-secret',
        {
            expiresIn: 60 * 120
        });
};

module.exports = {
  generateToken: function(req, res, next) {
      req.token = createToken(req.auth);
      return next();
  },
  sendToken: function(req, res) {
      res.setHeader('x-auth-token', req.token);
      return res.status(200).send(JSON.stringify(req.user));
  },
  verifyToken: function(req, res, next){
    
    var token=req.header['x-auth-token'];
    // if (!token)
    // return res.status(403).send( {auth: false, message: 'No token provided.' });
    // jwt.verify(token, 'my-secret', function(err, decoded) {
    //         if (err)
    // return res.status(500).send({auth: false, message: 'Failed to authenticate token.'});
    // req.userId = decoded.id;
    // next();
  }
};