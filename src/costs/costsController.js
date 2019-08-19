const Costs = require("./costsModels");

/*
 * CONTROLLERS
 */
const getCostsAll = (req, res) => {
  Costs.getCostsAll((err, allConts) => {
    if (err) {
      console.log("ERROR!!! GET COSTS: ", err);
      return res.sendStatus(500);
    }

    res.json(allConts);
  });
};

const getCostById = (req, res) => {
  Costs.getCostById(req.params.id, (err, needCost) => {
    if (err) {
      console.log("ERROR!!! GET ID COST: ", err);
      return sendStatus(500);
    }

    res.json(needCost);
  });
};

const postCosts = (req, res) => {
  const cost = {
    ...req.body
  };

  Costs.postCosts(cost, (err, newCost) => {
    if (err) {
      console.log("POST ERR!!!: ", err);
      return res.sendStatus(500);
    }
    res.send(cost);
  });
};

const patchCostById = (req, res) => {
  Costs.patchCostById(req.params.id, req.body, (err, updateCost) => {
    if (err) {
      console.log("PUT ERR!!!: ", err);
      return res.sendStatus(500);
    }

    res.sendStatus(200);
  });
};

const deleteCostById = (req, res) => {
  Costs.deleteCostById(req.params.id, (err, deleteCost) => {
    if (err) {
      console.log("DELETE ERR!!!: ", err);
      return res.sendStatus(500);
    }

    res.sendStatus(200);
  });
};

/*
 * EXPORTS
 */
module.exports = {
  getCostsAll,
  getCostById,
  postCosts,
  patchCostById,
  deleteCostById
};
