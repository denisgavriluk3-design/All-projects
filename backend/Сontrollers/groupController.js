import Product from "../models/Product.js";

export const getGroups = async (req, res, next) => {
  try {
    const groups = await Product.distinct("group");
    res.json(groups.filter(Boolean));
  } catch (err) {
    next(err);
  }
};
