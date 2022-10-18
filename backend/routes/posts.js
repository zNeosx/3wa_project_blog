import express from "express";
import { postController } from "../controllers/postController.js";
import { auth } from "../middlewares/auth.js";

const router = express.Router();

// router.get("/getAll", postController.getAll);
router.post("/addOne", auth.checkUser, postController.addOne);

export default router;
