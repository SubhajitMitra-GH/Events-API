const mongoose=require("mongoose");

const infoSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    location:{
        type:String,
        required:true,
    },
    time:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    
},
{
    timestamps:true,
});

module.exports=mongoose.model("info",infoSchema);