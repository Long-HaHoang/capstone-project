import mongoose, { model, models, mongo, Schema } from "mongoose";
import crypto from "crypto";

const URI = `mongodb+srv://longha:${process.env.MONGODB_PASSWORD}@cluster0.oe4imt0.mongodb.net/capstone?retryWrites=true&w=majority`;

const productSchema = new Schema(
  {
    id: String,
    title: String,
    description: String,
    price: Number,
    discountPercentage: Number,
    rating: Number,
    stock: Number,
    brand: String,
    category: String,
    thumbnail: String,
    images: [String],
  },
  { collection: "products" }
);

const Product = models.Product || model("Product", productSchema);

/**
 * A async function to connect to a MongoDB capstone database
 */
async function connectDatabase() {
  // Prepare for mongoose 7
  mongoose.set("strictQuery", false);
  await mongoose.connect(URI);
}

/**
 * A aync function to get all products from the capstone MongoDB
 * @returns {Array} Returns an array of products objects from the database
 */
async function getAllProducts() {
  await connectDatabase();

  const products = await Product.find({});
  return products;
}

async function getProduct(id) {
  await connectDatabase();
  const product = await Product.findOne({ id });
  return product;
}

async function createProduct(product) {
  await connectDatabase();
  const createdProduct = await Product.create({
    ...product,
    id: crypto.randomUUID(),
  });
  return createdProduct;
}

async function deleteProduct(id) {
  await connectDatabase();
  const deletedProduct = getPlace(id);
  await Product.deleteOne({ id });
  return deletedProduct;
}

async function updateProduct(id, product) {
  await connectDatabase();
  await Product.updateOne({ id }, product);
  const updatedProduct = getPlace(id);
  return updatedProduct;
}

export {
  getAllProducts,
  getProduct,
  createProduct,
  deleteProduct,
  updateProduct,
};
