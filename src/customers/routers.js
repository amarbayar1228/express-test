const { Router } = require("express");
const controller = require('./controller');
const router = Router();

router.get("/", controller.getCustomers)
router.post("/", controller.addCustomers) 

module.exports = router;
