const express = require("express");
const Router = express.Router();
const studentController = require("../Controller/studentController");
const {
    createValidator,
    updateValidator,
    validate,
} = require("../validators/studentvalidator.js");

Router.get("/index1",studentController.index1);
Router.get("/show/:id", studentController.show);
Router.post("/store", (req,res,next)=>{

    const result = validate(createValidator,req.body)

    if(!result.success){
        return res.status(400).json({status:"error",errors:result.errors});
    }
    studentController.store(req,res,next);
});

Router.put("/update/:id", (req, res, next) => {
    const result = validate(updateValidator, req.body);
    if (!result.success) {
        return res.status(400).json({ status: "error", errors: result.errors });
    }
    next();
}, studentController.update);

Router.delete("/delete/:id", studentController.delete);

module.exports = Router;
