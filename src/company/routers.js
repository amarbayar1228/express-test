const { Router } = require("express");
const controller = require('./controller');
const router = Router();

router.get("/", controller.getCompanys)
router.post("/", controller.addCompany)
router.get("/:id", controller.getCompanyById)
router.put("/:id", controller.updateCompany)
router.delete("/:id", controller.removeCompany)

module.exports = router;
