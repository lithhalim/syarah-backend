const postModel=require("../../model/postes-model/post-model");
const imagesModel=require("../../model/postes-model/images-post");
module.exports=async(req,res)=>{

    let Datause=await postModel.findAll({
        where:{postId:req.params.data},
        include:{
            model:imagesModel
        }
    })
    res.json(Datause)
}