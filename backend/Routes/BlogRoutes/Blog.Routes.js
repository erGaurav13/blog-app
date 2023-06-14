const express = require("express");

const blogRoute = express.Router();
const jwt = require("jsonwebtoken");
const { BlogModel } = require("../../Models/BlogModel/BlogModel");

blogRoute.get("/blog", async (req, res) => {
  try {
    const data = await BlogModel.find({});
    return res.status(201).send({ post: data });
  } catch (e) {
    console.log(e);
    return res.status(404).send({ message: e });
  }
});

blogRoute.post("/blog", async (req, res) => {
  const { title, content, category } = req.body;
  if (!title || !content || !category) {
    return res.status(404).send({ message: "Not Found entitty" });
  }

  const authHeader = req.headers.authorization;
  const token = authHeader.replace("Bearer", "");

  try {
    const decoded = jwt.verify(token, "12345");
    const post = await BlogModel.create({
      email: decoded.email,
      title,
      content,
      category,
    });
    return res.status(201).send({ post: post, message: "Post created" });
  } catch (err) {
    console.log(err);
    return res.status(401).send({ message: "token expired ", error: err });
  }
});

blogRoute.delete("/blog/:_id", async (req, res) => {
  const {_id} = req.params;
   console.log(_id)
  if (!_id) {
    return res.status(400).send({ message: "_id Missing" });
  }

  try {
    let resp = await BlogModel.deleteOne({ _id: _id });
    console.log(resp);
    return res.status(200).send({ message: "Delete sucessfull" });
  } catch (e) {
    return res.status(400).send({ message: e });
  }
});

module.exports = {
  blogRoute,
};
