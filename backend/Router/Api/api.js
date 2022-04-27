const router = require("express").Router();
const PostData = require("../../Model/model.js");

router.post("/post", async (req, res) => {
  const post = new PostData({
    title: req.body.title,
    story: req.body.story,
  });

  try {
    const savePost = await post.save();
    res.send(savePost);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/getAll", (req, res) => {
  PostData.find().then((data) => {
    res.send(data);
  });
});
module.exports = router;
