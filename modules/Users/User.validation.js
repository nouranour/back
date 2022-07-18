// const Joi = require('joi')
// const signUpValidator = {
//     body: Joi.object()
//         .required()
//         .keys({
//             first_name: Joi.string()
//                 .required()
//                 .pattern(new RegExp(/[A-Z][a-zA-Z][^#&<>\"~;$^%{}?]{2,20}$/))
//                 .messages({
//                     'string.empty': 'please fill in your name',
//                     'any.required': 'this field id required',
//                     'string.pattern.base': 'please try to match the pattern of your name ex:Noura'
//                 }),
//             last_name: Joi.string()
//                 .required()
//                 .pattern(new RegExp(/[A-Z][a-zA-Z][^#&<>\"~;$^%{}?]{2,20}$/))
//                 .messages({
//                     'string.empty': 'please fill in your name',
//                     'any.required': 'this field id required',
//                     'string.pattern.base': 'please try to match the pattern of your name ex:Noura'
//                 }),
//             email: Joi.string()
//                 .email()
//                 .required()
//                 .messages({
//                     'string.empty': 'please fill in your email',
//                     'any.required': 'this field is required'
//                 }),
//             password: Joi.string()
//                 .pattern(
//                     new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)
//                 )
//                 .required(),
//             // cPassword: Joi.string()
//             //     .valid(Joi.ref('password'))
//             //     .required(),
//             // gender: Joi.string()
//             //   .required()
//             //   .pattern(new RegExp(/[A-Z][a-zA-Z][^#&<>\"~;$^%{}?]{2,20}$/))
//             //   .messages({
//             //     'string.empty': 'please fill in your gender',
//             //     'any.required': 'this field is required',
//             //     'string.base': 'only female or male are available'
//             //   }),
//             age: Joi.number().required(),
//             // phone: Joi.number().required()
//         })
// }

// const loginValidator = {
//     body: Joi.object()
//         .required()
//         .keys({
//             email: Joi.string()
//                 .email()
//                 .required()
//                 .messages({
//                     'string.empty': 'please fill in your email',
//                     'any.required': 'this field is required'
//                 }),
//             password: Joi.string()
//                 .pattern(
//                     new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)
//                 )
//                 .messages({
//                     'string.empty': 'please enter your password',
//                     'any.required': 'this field is required',
//                     'string.pattern.base': 'please try to match the pattern of your password ex:Noura1122$'
//                 })
//         })
// }

// module.exports = {
//     signUpValidator,
//     loginValidator
// }