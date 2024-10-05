const asynchandler=require("express-async-handler");
const Info=require("../models/infoModel")
const getInfo=async(req,res)=>{
    const info=await Info.findById(req.params.id);
    
    if(!info){
        res.status(400)
        throw new Error("Info not found")
    }
        res.status(200).json(info)
}

const createInfo=asynchandler(async(req,res)=>{
    const {name,location,time,description}=req.body;
    console.log(req.body);
    if(!name||!location||!time||!description){
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    const info=await Info.create({
        name,
        location,
        time,
        description
    });
    res.status(201).json(info);
});

const updateInfo=asynchandler(async(req,res)=>{
    const info=await Info.findById(req.params.id);
    if(!info){
        res.status(404);
        throw new Error("Info Not found");
    }
    const updateInfo=await Info.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    )
    res.status(200).json(updateInfo);
});

const deleteInfo=asynchandler(async(req,res)=>{
    const info=await Info.findById(req.params.id);
    if(!info){
        res.status(404);
        throw new Error("Info Not found");
    }
    await info.deleteOne(); 

    res.status(200).json(info);
});
module.exports={getInfo,createInfo,updateInfo,deleteInfo}