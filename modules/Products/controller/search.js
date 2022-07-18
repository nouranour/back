const { StatusCodes } = require('http-status-codes')
const productModel = require('../../../DB/Models/Product.model')



exports.getBySearch = async(req, res) => {
    try {
        const { key } = req.params
        const product = await productModel.find({
            $or: [{ title: { $regex: `${key}` } }]
        })
        if (!product) {
            res.error.json({
                message: 'there is no product with this key, please enter exist key'
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