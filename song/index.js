const express = require("express");
const mongoose= require("mongoose");

const studentRoute=require("./studentroute");
const app = express();
const PORT = 80;
app.use(express.json());

mongoose.connect("mongodb+srv://ravipithadiya316_db_user:Ravi777@mca.2movm5y.mongodb.net/?retryWrites=true&w=majority&appName=MCA",
   
);

app.use("/song",studentRoute);
app.listen(PORT,()=>{
    console.log("server is running:localhost:"+PORT);
});