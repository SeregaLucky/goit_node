const { Router } = require("express");
const router = Router();
const {
  getCostsAll,
  getCostById,
  postCosts,
  patchCostById,
  deleteCostById
} = require("./costsController");

/*
 * ROUTER
 */
router.get("/", getCostsAll);

router.get("/:id", getCostById);

router.post("/", postCosts);

router.patch("/:id", patchCostById);

router.delete("/:id", deleteCostById);

/*
 * EXPORTS
 */
module.exports = router;
