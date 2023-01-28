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

async function connectDatabase() {
  await mongoose.connect(URI);
}

async function getAllProducts() {
  await connectDatabase();

  const products = await Product.find({});
  return products;
}

export { getAllProducts };
