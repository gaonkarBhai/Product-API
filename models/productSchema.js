const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name must be provided"],
  },
  featured: {
    type: Boolean,
    default: false,
  },
  price: {
    type: Number,
    required: [true, "price must be provided"],
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  description: {
    type: String,
    required: [true, "description must be provided"],
  },
  company: {
    type: String,
    required: [true, "company name must be provided"],
    enum: [
      "Nike",
      "Apple",
      "Samsung",
      "Sony",
      "Puma",
      "Under Armour",
      "Zara",
      "H&M",
      "Gucci",
      "Lululemon",
      "Adidas",
      "Reebok",
      "Louis Vuitton",
      "Rolex",
      "Canon",
      "Levi's",
      "Vans",
      "Converse",
      "Bose",
      "Tiffany & Co.",
      "Urban Outfitters",
      "Fossil",
      "Lacoste",
      "Forever 21",
      "Tommy Hilfiger",
      "Ray-Ban",
    ],
  },
},{timestamps:true});

const productModel = mongoose.model("Product", productSchema);

module.exports = productModel;
