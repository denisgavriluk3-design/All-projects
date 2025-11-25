import mongoose from "mongoose";

const GroupSchema = new mongoose.Schema({
  _id: { type: String },
  name: { type: String, required: true }
});

export default mongoose.model("Group", GroupSchema);
