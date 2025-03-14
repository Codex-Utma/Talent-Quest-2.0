import { Router } from "express";
import { getDashboardInfo } from "../controllers/employee/main.controller";
import authMiddleware from "../utils/helpers/authMiddleware";

const router = Router();

router.get("/dashboard", authMiddleware("employee"), (req, res) => {
    getDashboardInfo(req, res);
});

export default router;
