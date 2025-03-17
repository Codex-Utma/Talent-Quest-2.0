import { Router } from "express";
import { login, logout, register } from "../controllers/user.controller";
import authMiddleware from "../utils/helpers/authMiddleware";

const router = Router();

router.post("/login", (req, res) => {
    login(req, res);
});

router.post("/logout", authMiddleware('both'), (req, res) => {
    logout(req, res);
});

router.post("/register", authMiddleware('admin'), (req, res) => {
    register(req, res);
});

export default router;
