const cardModel = require('../../../DB/Models/card.model')
const { StatusCodes } = require('http-status-codes')
exports.card = async(req, res) => {
    try {
        const { cardHolder_name, cardNumber, exp, cvv } = req.body
        const findCard = await cardModel.findOne({ cardNumber })
        if (findCard) {
            res.status(StatusCodes.BAD_REQUEST).json({
                message: 'ooops!! this email is already exist please enter another email'
            })
        } else {
            const newCard = new cardModel({
                cardHolder_name,
                cardNumber,
                exp,
                cvv,
            })
            const savedCard = await newCard.save()
            res.status(StatusCodes.CREATED).json({ message: 'Done', savedCard })
        }
    } catch (errors) {
        console.log(errors)
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Fail' })
    }
}