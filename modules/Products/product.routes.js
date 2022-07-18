const { my_multer } = require('../../Services/multer')
const { add_product } = require('./controller/add_product')
const { endPoint } = require('./Product.endPoint')
const { auth } = require('../../Middelwares/auth')
    // const { validation } = require('../../Middelwares/validation')
const { get_By_Cat } = require('./controller/get_product_by_cat')
    // const {
    //     Add_product,
    //     get_By_Cat_validation,
    //     get_By_ID_Validation
    // } = require('./product.validation')
const { get_By_ID } = require('./controller/get_product_by_id')
const { get_all_products } = require('./controller/get_all_products')
const { getBySearch } = require('./controller/search')
const router = require('express').Router()

router.post(
        '/add_product',
        auth(endPoint.Add_product),
        my_multer('Products').array('image', 3),

        add_product
    ) // API to add product by admin only

router.get(
        '/get_product/:category',

        get_By_Cat
    ) // API to get all products of specific category
router.get('/get_product_By_ID/:id', get_By_ID) // API to get specific product by its id
router.get('/products', get_all_products) // API to get all products
router.get('/search/:key', getBySearch)
module.exports = router


//  validation(get_By_ID_Validation)