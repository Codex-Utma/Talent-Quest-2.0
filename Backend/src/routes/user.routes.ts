import { Router } from "express";
import { login, logout } from "../controllers/user.controller";
import authMiddleware from "../utils/helpers/authMiddleware";

const router = Router();

router.get("/", (req, res) => {
    res.send({ message: "Hello World" });
});

router.post("/login", (req, res) => {
    login(req, res);
});

router.post("/logout", authMiddleware('both'), (req, res) => {
    logout(req, res);
});

export default router;
