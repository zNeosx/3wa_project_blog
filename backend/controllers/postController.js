import { PostModel } from "../models/PostModel.js";

export const postController = {
  addOne: async (req, res) => {
    try {
      const post = new PostModel({ ...req.body, userId: req.session.user.id });
      await post.save();
      res.status(200).json(post);
    } catch (err) {
      console.log(err.message);
      res.status(400).json({ message: err.message });
    }
  },
};
