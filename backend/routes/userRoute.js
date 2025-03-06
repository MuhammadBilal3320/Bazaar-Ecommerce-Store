import { createRole, createUser, deletingUser, getAllAdminDetails, getSingleAdminDetails, loginUser, logoutUser, userCheckProfile, userForgotPassword, userResetPassword, userUpdateOwnProfile, userUpdatePassword} from "../controller/userController.js";
import { Router } from "express";
import { isAuthenticated, isMaster } from "../middleware/authentication.js";

const router = Router();

// User Authentication Routes
router.route("/createUser").post(createUser);
router.route("/loginUser").post(loginUser);
router.route("/forgetPassword").post(userForgotPassword);
router.route("/resetPassword/:token").put(userResetPassword);
router.route("/logoutUser").get(logoutUser);

// User Profile Routes
router.route("/userProfile").get(isAuthenticated ,userCheckProfile);
router.route("/userUpdateProfile").put(isAuthenticated ,userUpdateOwnProfile);
router.route("/userUpdatePassword").put(isAuthenticated, userUpdatePassword);

// Admin Routes
router.route("/admin/singleAdminDetails/:id").get(isAuthenticated, getSingleAdminDetails);
router.route("/admin/getAllAdminDetails").get(isAuthenticated, getAllAdminDetails);

// Master Access Route
router.route("/master/createRole/:id").put(isAuthenticated, isMaster("master"), createRole);
router.route("/master/deletingUser/:id").delete(isAuthenticated, isMaster("master"), deletingUser);

export default router;
