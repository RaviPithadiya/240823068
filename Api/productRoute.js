const express = require("express");
const Router = express.Router();
const productController = require("./productController");
const {
    createValidator,
    updateValidator,
    validate,
} = require("./productvalidator");

Router.get("/index1",productController.index1);
Router.get("/show/:id", productController.show);
Router.post("/store", (req,res,next)=>{

    const result = validate(createValidator,req.body)

    if(!result.success){
        return res.status(400).json({status:"error",errors:result.errors});
    }
    productController.store(req,res,next);
});

Router.put("/update/:id", (req, res, next) => {
    const result = validate(updateValidator, req.body);
    if (!result.success) {
        return res.status(400).json({ status: "error", errors: result.errors });
    }
    next();
}, productController.update);

Router.delete("/delete/:id", productController.delete);

module.exports = Router;
