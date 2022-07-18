// const Joi = require('joi')
// const Add_product = {
//     body: Joi.object()
//         .required()
//         .keys({
//             title: Joi.string()
//                 .required()
//                 .pattern(new RegExp(/[A-Z][a-zA-Z][^#&<>\"~;$^%{}?]{2,20}$/))
//                 .messages({
//                     'string.empty': 'please fill in your title',
//                     'any.required': 'this field id required',
//                     'string.pattern.base': 'please try to match the pattern of your title ex:Chairs'
//                 }),
//             desc: Joi.string()
//                 .optional()
//                 .messages({
//                     'string.empty': 'please fill in your description'
//                 }),
//             category: Joi.string().required().pattern(new RegExp(/[A-Z][a-zA-Z][^#&<>\"~;$^%{}?]{2,20}$/))
//                 .messages({
//                     'string.empty': 'please fill in your category',
//                     'any.required': 'this field id required',
//                     'string.pattern.base': 'please try to match the pattern of your title ex:Women Clothes'
//                 }),
//             price: Joi.number().required()
//         })
// }

// const get_By_Cat_validation = {
//     params: Joi.object()
//         .required()
//         .keys({
//             category: Joi.string().required().pattern(new RegExp(/[A-Z][a-zA-Z][^#&<>\"~;$^%{}?]{2,20}$/))
//                 .messages({
//                     'string.empty': 'please fill in your category',
//                     'any.required': 'this field id required',
//                     'string.pattern.base': 'please try to match the pattern of your title ex:Women Clothes'
//                 }),
//         })
// }

// // const get_By_ID_Validation ={
// //   body: Joi.object()
// //     .required()
// //     .keys({
// //       _id: Joi.string().required(),
// //     })
// // }
// module.exports = {
//     Add_product,
//     get_By_Cat_validation,

// }