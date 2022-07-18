const mongoose = require("mongoose")

const connectionDB = ()=>{
    return mongoose
    .connect(process.env.CONNICTION_URL)
    .then((res)=> console.log("DB connected Success"))
    .catch((err)=> console.log("DB connected fail"))

}



module.exports = connectionDB