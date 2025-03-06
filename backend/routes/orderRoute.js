import express from "express";
import { isAdmin, isAuthenticated } from "../middleware/authentication.js";
import { createOrder, deleteOrder, getAllOrders, getSingleOrder, getUserAllOrders, updateOrderStatus } from "../controller/orderController.js";

const router = express.Router();

router.route("/createNewOrder").post(isAuthenticated, isAdmin("master", "admin"), createOrder);
router.route("/getSingleOrder/:orderId").get(isAuthenticated, getSingleOrder);
router.route("/getUserOwnOrders").get(isAuthenticated, getUserAllOrders);

// admin routes 
router.route("/admin/getAllOrders").get(isAuthenticated, isAdmin("master", "admin"), getAllOrders);
router.route("/admin/orderStatusUpdate/:orderId").put(isAuthenticated, isAdmin("master", "admin"), updateOrderStatus);
router.route("/admin/orderDelete/:orderId").delete(isAuthenticated, isAdmin("master", "admin"), deleteOrder);


export default router;