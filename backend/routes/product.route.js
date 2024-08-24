import express from "express";

import { createProduct, deleteProduct, getProducts, updateProduct } from "../controllers/product.controller.js";

const router = express.Router();

router.get("/", getProducts); // DB de ki ürünlerin hepsinin gösterilmesi
router.post("/", createProduct); // ürünlerin database e kaydedilmesi
router.delete("/:id", deleteProduct); // ürünlerin DB den silinmesi
router.put("/:id", updateProduct); // DB de ki ürünlerin güncellenmesi

export default router;
