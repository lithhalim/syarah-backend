const post_model=require("../../model/postes-model/post-model");
const post_images_model=require("../../model/postes-model/images-post");

module.exports=async(req,res)=>{    
    const {fullName,PhoneNumber,Price,postId,Option,Condition,
        kilometer,CarBrands,Color,Gear,Fuel,EngineSize,Origin,ShapeCars,imagesHave}=req.body
    post_model.create({fullName:fullName,PhoneNumber:PhoneNumber,Price:Price,postId:postId,Option:Option,Condition:Condition,
        kilometer:kilometer,CarBrands:CarBrands,Color:Color,Gear:Gear,Fuel:Fuel,EngineSize:EngineSize,Origin:Origin,ShapeCars:ShapeCars})


        console.log(imagesHave)
        for(let i=0;i<imagesHave.length;i++){
            post_images_model.create({imageUrl:imagesHave[i],image_for_postid:postId})

        }

}
