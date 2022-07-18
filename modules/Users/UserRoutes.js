// const { validation } = require('../../Middelwares/validation')
const { signin } = require('./uesrController.js/SignIn')
const { signup } = require('./uesrController.js/SignUp')
const { card } = require('./uesrController.js/card')
    // const { signUpValidator, loginValidator } = require('./User.validation')

const router = require('express').Router()

router.post('/User/signup', signup)
router.post('/User/login', signin)
router.post('/checkout', card)

module.exports = router
    // , validation(signUpValidator)