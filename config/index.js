require("dotenv").config()
module.exports={
    PORT:process.env.port,
    DB:process.env.mongodburl
}