const expressJwt = require('express-jwt');
const config = require('../config.json');
const userService = require('../services/user.service');
const secret = config.secret;

function jwt(){
    return expressJwt({secret, isRevoked}).unless({
        path: [
            //routes that don't require authentication
            '/users/authenticate',
            '/users/register'
        ]
    })
}

async function isRevoked(req, payload, done){
    const user = await userService.getUserById(payload.sub);

    if(!user){
        done(null, true);
    }
    
    req.userId = user._id;
    done();
}

module.exports = jwt;
