const path = require('path')
const { StatusCodes } = require('http-status-codes')
const productModel = require('../../../DB/Models/Product.model')
exports.add_product = async (req, res) => {
  try {
    const { title, description, price, category } = req.body
    if (req.ExtensionError) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: 'in-valid picture extension' })
    }
    const prodcut = new productModel({
      title,
      description,
      price,
      category
    })
    const saved = await prodcut.save()
    req.files.forEach(async i => {
      const imageURL = `${req.protocol}://${req.headers.host}/${req.destinationFile}/${i.filename}`
      const modify = await productModel.findOneAndUpdate(
        { _id: saved._id },
        {
          $push: {
            product_img: imageURL
          }
        }
      )
    })
    res.status(StatusCodes.CREATED).json({ message: 'Added Done' })
  } catch (err) {
    console.log(err)
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Fail' })
  }
}
