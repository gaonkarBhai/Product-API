const productModel = require("../models/productSchema");

const getAllProducts = async (req, res) => {
  try {
    const { featured, company, name, rating, sort, feilds } =
      req.query;
    const queryObj = {};

    if (featured) queryObj.featured = featured === "true" ? true : false;
    if (rating) queryObj.rating = Number(rating);
    if (company) queryObj.company = company;
    if (name) queryObj.name = { $regex: name, $options: "i" };

    let data = productModel.find(queryObj);

    if (sort) {
      const sortList = sort.split(",").join(" ");
      data = data.sort(sortList);
    }
    if (feilds) {
      const feildList = feilds.split(",").join(" ");
      data = data.select(feildList);
    }
    
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    data = data.skip(skip).limit(limit);
    const products = await data;
    return res.status(200).json({ products, nbHits: products.length });
  } catch (error) {
    console.log(error);
  }
};
module.exports = { getAllProducts };
