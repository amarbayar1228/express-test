const express  = require("express");
const companyRoutes = require('./src/company/routers')
const customersRoutes = require('./src/customers/routers')
const app = express();
const port = 3001;

app.use(express.json());
app.get("/", (req,res)=> {
    res.send("Hello world")
})

app.use("/company", companyRoutes);
app.use("/customers", customersRoutes);

app.listen(port, () => console.log(`port: ${port}`))