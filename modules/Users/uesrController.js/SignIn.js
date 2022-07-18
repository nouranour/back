const bcrypt = require('bcryptjs')
const { StatusCodes } = require('http-status-codes')
const jwt = require('jsonwebtoken')
const userModel = require('../../../DB/Models/User.model')
    // const openurl = require("openurl")
exports.signin = async(req, res) => {
    try {
        const { email, password } = req.body
        const user = await userModel.findOne({ email })
        if (!user) {
            res
                .status(StatusCodes.BAD_REQUEST)
                .json({ message: 'in-valid email or password' })
        } else {
            const match = await bcrypt.compare(password, user.password)
            if (match) {
                const token = jwt.sign({ id: user._id, isLoggedIn: true },
                        process.env.tokenKey, { expiresIn: '24h' }
                    )
                    // openurl.open("insuc.html")
                res.status(StatusCodes.OK).json({ message: 'Log in success', token })
            } else {
                res
                    .status(StatusCodes.BAD_REQUEST)
                    .json({ message: 'in-valid email or password' })
            }
        }
    } catch (error) {
        console.log(error)
        res
            .status(StatusCodes.INTERNAL_SERVER_ERROR)
            .json({ message: 'Fail', error })
    }
}