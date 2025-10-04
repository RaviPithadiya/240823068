const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://ravipithadiya316_db_user:Ravi777@mca.2movm5y.mongodb.net/?retryWrites=true&w=majority&appName=MCA",
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

console.log("Mongodb connected  successfully");

Student.find()
    .then((allstudent)=>{
        console.log("All student retrieved successfully:",allstudent);
    })
    .catch((error)=>{
        console.error("Error retrieving student:",error);
    });

    Student.find({department:"Computer Science"})
    .then((allstudent)=>{
        console.log("All student retrived successfully:",allstudent);
    })
    .catch((error)=>{
        console.error("Error retriving students:",error);
    });

const student = new Student({
    name:"Ravi Pithadiya",
    department:"Computer Science",
    startYear:2020,
    endYear:2024,
    enrollment:240823068,
    address:"Rajkot",
});

const student = new Student({
    name:"Uday Maru",
    department:"Computer Science",
    startYear:2020,
    endYear:2024,
    enrollment:240823059,
    address:"Rajkot",
});


student.save().then(()=>{
    console.log("student saved successfully");
})
.catch((error)=>{
    console.error("Error saving student",error)
});




