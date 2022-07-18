const { StatusCodes } = require('http-status-codes')
const productModel = require('../../../DB/Models/Product.model')

exports.get_By_ID = async(req, res) => {
    try {
        const { id } = req.params
        const product = await productModel.findOne({ _id: id })
        if (!product) {
            res.status(StatusCodes.BAD_REQUEST).json({
                message: 'there is no product with tis id , please enter valid id'
            })
        } else {
            res.status(StatusCodes.OK).json({
                message: `Done`,
                Product: product
            })
        }
    } catch (error) {
        console.log(error)
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Fail' })
    }
}