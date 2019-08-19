const db = require("../db");
const ObjectID = require("mongodb").ObjectID;

/*
 * MODELS
 */
exports.getCostsAll = callBack => {
  db.get()
    .collection("costs")
    .find()
    .toArray((err, allConts) => callBack(err, allConts));
};

exports.getCostById = (id, callBack) => {
  db.get()
    .collection("costs")
    .findOne({ _id: ObjectID(id) }, (err, needCost) => callBack(err, needCost));
};

exports.postCosts = (cost, callBack) => {
  db.get()
    .collection("costs")
    .insertOne(cost, (err, newCost) => callBack(err, newCost));
};

exports.patchCostById = (id, newCost, callBack) => {
  db.get()
    .collection("costs")
    .updateOne({ _id: ObjectID(id) }, { $set: newCost }, (err, updateCost) =>
      callBack(err, updateCost)
    );
};

exports.deleteCostById = (id, callBack) => {
  db.get()
    .collection("costs")
    .deleteOne({ _id: ObjectID(id) }, (err, deleteCost) =>
      callBack(err, deleteCost)
    );
};
