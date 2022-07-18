const mongoose = require('mongoose')

const Product_Schema = new mongoose.Schema(
  {
    title: String,
    desc: String,
    price: Number,
    product_img: {
      type:[String],
     default: []
    },
    category: String
  },
  {
    timestamps: true
  }
)
const productModel = mongoose.model('Product', Product_Schema)

module.exports = productModel
