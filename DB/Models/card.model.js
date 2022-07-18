const mongoose = require('mongoose')
const bcrypt = require("bcryptjs")
const CryptoJS = require('crypto-js')
require('dotenv').config()
const card_Schema = new mongoose.Schema({
    cardHolder_name: String,
    cardNumber: String,
    exp: String,
    cvv: String,

    role: {
        type: String,
        enum: ['User', 'Admin'],
        default: 'User'
    }
}, {
    timestamps: true
})

card_Schema.pre('save', async function(next) {
    // this.password = await bcrypt.hash(
    //         this.password,
    //         parseInt(process.env.saltRounds)
    //     ) // hash password before saving it in database

    // next()
})
const cardModel = mongoose.model('card', card_Schema)

module.exports = cardModel