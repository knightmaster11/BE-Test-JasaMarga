const { Router } = require("express");
const controller = require('./controller');

const router = Router();

router.get("/", controller.getRuass);
router.post("/", controller.addRuas);
router.get("/:id", controller.getRuassById);
router.put("/:id", controller.updateRuas);
router.delete("/:id", controller.removeRuas);

module.exports = router;