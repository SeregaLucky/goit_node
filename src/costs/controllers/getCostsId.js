const allCosts = require("../../db/consts/all-costs.json");

const getCostsId = (req, res) => {
  const findNeedId = allCosts.find(cost => cost.id === Number(req.params.id));

  if (!findNeedId) {
    const notFound = {
      status: "Did not find on this id",
      products: []
    };

    return res.json(notFound);
  } else {
    const found = {
      status: "success",
      products: [findNeedId]
    };
    return res.json(found);
  }
};

module.exports = getCostsId;
