const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config.json');
const db = require('../_helpers/db');
const User = db.User

module.exports = {
    async authenticate({username, password}){
        const user = await User.findOne({ username });  

        if(user && bcrypt.compareSync(password, user.hash)){
            const { hash, ...userWithoutHash } = user.toObject();
            const token = jwt.sign({ sub: user.id }, config.secret, { expiresIn: '10m'});

            return{
                ...userWithoutHash,
                token
            }
        }
    },
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
            await user.save();
        },
    async getAllUsers(){
        return await User.find().select('-hash');
    },
    async getUserById(id){
        return await User.findById(id).select('-hash');
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

        await user.save();
    },
    async deleteUser(id){
        await User.findByIdAndRemove(id);
    }
}