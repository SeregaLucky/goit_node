const { Router } = require("express");
const router = Router();

const getCostsId = require("./controllers/getCostsId");
const getCostsCategory = require("./controllers/getCostsCategory");

router.get("/", getCostsCategory);

router.get("/:id", getCostsId);

module.exports = router;
