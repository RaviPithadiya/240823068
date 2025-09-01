const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://ravipithadiya316_db_user:Ravi777@mca.2movm5y.mongodb.net/?retryWrites=true&w=majority&appName=MCA",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
});

const studentSchema = new mongoose.Schema({
    name:String,
    department:String,
    startYear:Number,
    endYear:Number,
    enrollment:Number,
    address:String,
});

const Student = mongoose.model("Student",studentSchema);

console.log("MongoDB connected successfully");

const student = new Student({
    name:"Ravi Pithadiya",
    department:"Computer Science",
    startYear:2020,
    endYear:2024,
    enrollment:240823068,
    address:"Rajkot",
});

student.save().then(()=>{
    console.log("student saved successfully");
})
.catch((error)=>{
    console.error("Error saving student",error)
});




