const { Roles } = require("../../Middelwares/auth");

 

exports.endPoint = {
  Add_product: [Roles.Admin],
  get_all_Products: [Roles.User]
}
