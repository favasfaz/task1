import express from "express";
import { userLogin,userDeteils } from "../Controller/userController.js";
import {verifyToken} from '../middleware/authMiddleware.js'
const router = express.Router();

router.route("/login").post(userLogin);
router.route("/addDeteils").post(verifyToken,userDeteils)

export default router;
