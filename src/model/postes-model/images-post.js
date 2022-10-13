const { TEXT } = require("sequelize")
const database=require("../../database/database")

module.exports=database.define("imagespostes",{
    imageUrl:{
        type:TEXT,
    },
    image_for_postid:{
        type:TEXT,
    }
})


