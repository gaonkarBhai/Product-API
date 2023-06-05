// only for adding document to mongodb atlas

require("dotenv").config();
const connDB = require("./db/conn");
const productModel = require('./models/productSchema')

const productsJSON = require('./products.json')

const start = async() => {
  try {
    connDB();
    await productModel.deleteMany();
    console.log('uploading...');
    await productModel.create(productsJSON);
    console.log('completed...');
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();