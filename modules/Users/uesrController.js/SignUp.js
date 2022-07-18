const userModel = require('../../../DB/Models/User.model')
const { StatusCodes } = require('http-status-codes')
exports.signup = async(req, res) => {
    try {
        const { first_name, last_name, email, password, age } = req.body
        const findUser = await userModel.findOne({ email })
        if (findUser) {
            res.status(StatusCodes.BAD_REQUEST).json({
                message: 'ooops!! this email is already exist please enter another email'
            })
        } else {
            const newUser = new userModel({
                first_name,
                last_name,
                email,
                password,
                age,

            })
            const savedUser = await newUser.save()
            res.status(StatusCodes.CREATED).json({ message: 'Done', savedUser })
        }
    } catch (errors) {
        console.log(errors)
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Fail' })
    }
}