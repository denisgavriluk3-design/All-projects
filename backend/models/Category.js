import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
  _id: { type: String },
  name: { type: String, required: true }
});

export default mongoose.model("Category", CategorySchema);
