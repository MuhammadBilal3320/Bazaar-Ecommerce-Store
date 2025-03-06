import express from 'express';
import { createProduct, createProductReview, deleteProduct, deleteProductReview, getAllProducts, getAllSingleProductReviews, getProductDetails, updateProduct } from '../controller/productController.js';
import { isAdmin, isAuthenticated } from '../middleware/authentication.js';

const router = express.Router();

router.route("/admin/createProduct").post(isAuthenticated, isAdmin("admin", "master"), createProduct);
router.route("/getAllProducts").get(getAllProducts);
router.route("/getProductDetails/:id").get(getProductDetails);
router.route("/admin/updateProduct/:id").put(isAuthenticated, isAdmin("admin", "master"), updateProduct);
router.route("/admin/deleteProduct/:id").delete(isAuthenticated, isAdmin("admin", "master"), deleteProduct);
router.route("/userReviewing").put(isAuthenticated, createProductReview);
router.route("/userDeletingReview").delete(isAuthenticated, deleteProductReview);
router.route("/getSingleProductReviews").get(getAllSingleProductReviews);


export default router;
