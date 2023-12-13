import express from "express";
import { checkAdmin, requireSignIn } from "../middlewares/authMiddleWare.js";
import { createProductController } from "../controllers/productController.js";
import formidable from "express-formidable";

const router = express.Router();

router.post(
  "/create-product",
  requireSignIn,
  checkAdmin,
  formidable(),
  createProductController
);

export default router;
