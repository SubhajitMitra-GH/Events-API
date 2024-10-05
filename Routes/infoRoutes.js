const express=require("express");
const router=express.Router();
const {getInfo,createInfo,updateInfo,deleteInfo}=require("../controllers/infoController")

router.route("/").post(createInfo);
router.route("/:id").put(updateInfo).delete(deleteInfo).get(getInfo);

module.exports=router;