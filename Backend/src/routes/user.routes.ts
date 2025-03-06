import { Router } from "express";
import { login } from "../controllers/user.controller";

const router = Router();

router.get("/", (req, res) => {
    res.send({ message: "Hello World" });
});

router.post("/login", (req, res) => {
    login(req, res);
});

export default router;
