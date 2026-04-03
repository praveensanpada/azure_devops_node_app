import express from "express";
import {
    home,
    healthCheck,
    getUsers,
    getUserById,
    getAppInfo
} from "../controllers/apiController.js";

const router = express.Router();

router.get("/", home);
router.get("/health", healthCheck);
router.get("/info", getAppInfo);
router.get("/users", getUsers);
router.get("/users/:id", getUserById);

export default router;