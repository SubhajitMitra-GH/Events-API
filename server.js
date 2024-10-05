const express=require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnections");
const dotenv=require("dotenv").config();
connectDb();
const app=express();

const port=process.env.PORT

app.use(express.json())
app.use("/info",require("./Routes/infoRoutes"))
app.use(errorHandler);

app.listen(port,()=>{
    console.log(`Running at ${port}`);
});