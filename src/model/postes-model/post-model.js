const { TEXT, INTEGER } = require("sequelize")
const { STRING } = require("sequelize")
const database=require("../../database/database")

const  postes_model=database.define("posts",{
    postId:{
        type:TEXT,
        allowNull:false,
        primaryKey:true
    },
    CarBrands:{
      type:TEXT,
    },
    Color:{
        type:STRING,
    },
    Condition:{
      type:STRING
    },
    EngineSize:{
      type:STRING,
    },
    Fuel:{
      type:STRING,
    },
    Gear:{
      type:STRING,
    },
    Option:{
      type:STRING,
    },
    Origin:{
      type:STRING,
    },
    PhoneNumber:{
      type:STRING,
    },
    Price:{
      type:STRING,
    },
    ShapeCars:{
      type:STRING,
    },
    fullName:{
      type:STRING,
    },
    kilometer:{
      type:STRING,
    },

})


//---------------------------------------------all relation on postes ------------------------------------// 

  const image_model=require("../../model/postes-model/images-post");

  postes_model.hasMany(image_model,{
    constraints: false,
    timestamps: false,
    foreignKey:"image_for_postid",
    sourceKey:"postId"
  })
  image_model.belongsTo(postes_model,{
    constraints: false,
    timestamps: false,
    foreignKey:"image_for_postid",
    targetKey:"postId"
  })




module.exports=postes_model