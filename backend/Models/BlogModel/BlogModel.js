const mongoose = require("mongoose");

const BlogSchema = mongoose.Schema({
  email: { type: String, required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  category: { type: String, required: true },
  likes: { type: Number, default: 0 },
  comments: { type: Array, default: [] },
});

const BlogModel = mongoose.model("blog", BlogSchema);
module.exports = {
    BlogModel,
};
