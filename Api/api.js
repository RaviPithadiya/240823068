const express = require("express");
const productRoute = require('./productRoute.js');
const app = express();
const PORT = 80;
app.use(express.json());

app.use('/product',productRoute);
app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}/`);
});




