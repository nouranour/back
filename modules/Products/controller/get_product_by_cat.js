const { StatusCodes } = require('http-status-codes')
const productModel = require('../../../DB/Models/Product.model')

exports.get_By_Cat = async (req, res) => {
  try {
    const { category } = req.params
    const products = await productModel.find({ category })
    if (!products.length) {
      res.status(StatusCodes.BAD_REQUEST).json({
        message: 'there ara no products in this category',
        Products: products
      })
    } else {
      res
        .status(StatusCodes.OK)
        .json({
          message: `products of category ${category}`,
          Products: products
        })
    }
  } catch (error) {
    console.log(error)
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Fail' })
  }
}
