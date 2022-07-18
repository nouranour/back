const { StatusCodes } = require('http-status-codes')
const productModel = require('../../../DB/Models/Product.model')

exports.get_all_products = async (req, res) => {
  try {
    const products = await productModel.find({})
    if (!products.length) {
      res.status(StatusCodes.BAD_REQUEST).json({
        message: 'there ara no products till now',
        Products: products
      })
    } else {
      res
        .status(StatusCodes.OK)
        .json({
          message: `Done`,
          Products: products
        })
    }
  } catch (error) {
    console.log(error)
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Fail' })
  }
}
