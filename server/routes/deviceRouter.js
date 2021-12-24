const Router = require("express")
const router = new Router()
const deviceController = require("../controllers/deviceController.js")
const checkRole = require ("../middleware/checkRoleMiddleware.js")

router.post("/", checkRole("ADMIN"), deviceController.create)
router.get("/", deviceController.getALL)
router.get("/:id", deviceController.getONE)
router.delete('/:id', checkRole("ADMIN"), deviceController.delete)

module.exports = router