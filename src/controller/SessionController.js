const User = require('../models/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const authConfig = require('../config/auth')

module.exports = {
    async login (req, res) {
        const {email, password} = req.body;

        const user = await User.findOne({where : {email} });

        if (!user){
            return res.status(400).send({error: 'User not found.'});
        };

        if (!await bcrypt.compare(password, user.password_hash)) {
            return res.status(400).send({error: 'Invalid password.'})
        };

        const {id} = user;

        return res.status(200).json({
            user:{id,email}, token: jwt.sign({id}, authConfig.secret,{
                expiresIn:authConfig.expiresIn,
            })
        });
    }
}