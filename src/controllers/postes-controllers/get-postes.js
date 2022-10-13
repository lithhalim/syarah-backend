const PostModel=require("../../model/postes-model/post-model")
const imageModel=require("../../model/postes-model/images-post")

module.exports=async(req,res)=>{
    let Datause=await PostModel.findAll({
        include:{
            model:imageModel
        }
    });

    res.json(Datause)

}