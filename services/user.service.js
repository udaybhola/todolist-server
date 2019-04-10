const bcrypt = require('bcryptjs');
const db = require('../_helpers/db');
const User = db.User

module.exports = {
    async create(userParam) {
            if (await User.findOne({ username: userParam.username })) {
                throw "Username " + userParam.username + " is already taken";
            }

            const user = new User(userParam);

            //password to hash
            if (userParam.password) {
                user.hash = bcrypt.hashSync(userParam.password, 10);
            }

            //save user
            return await user.save();
        },
    async getAllUsers(){
        return await User.find().select('-hash');
    },
    async updateUser(id, userParam){

        user = await User.findById(id);

        if(!user) throw "User not found";
        
        if(user.username !== userParam.username && await User.findOne({ username: userParam.username })){
            throw "Username " + userParam.username + " is already taken";
        }

        //password to hash
        if (userParam.password) {
            userParam.hash = bcrypt.hashSync(userParam.password, 10);
        }

        // cp userparam props to user
        Object.assign(user, userParam);

        return await user.save();
    }
}