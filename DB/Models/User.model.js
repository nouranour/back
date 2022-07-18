const mongoose = require('mongoose')
const bcrypt = require("bcryptjs")
const CryptoJS = require('crypto-js')
require('dotenv').config()
const User_Schema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
    password: String,
    age: String,
    role: {
        type: String,
        enum: ['User', 'Admin'],
        default: 'User'
    }
}, {
    timestamps: true
})

User_Schema.pre('save', async function(next) {
    this.password = await bcrypt.hash(
            this.password,
            parseInt(process.env.saltRounds)
        ) // hash password before saving it in database
        // this.phone = CryptoJS.AES.encrypt(
        //         this.phone,
        //         process.env.encryptionKey
        //     ).toString() // encrypt phone before saving it in database
    next()
})
const userModel = mongoose.model('User', User_Schema)

module.exports = userModel




// phone: String,
// gender: {
//     type: String,
//     enum: ['Female', 'Male']
// },
// Profile_pic: String,