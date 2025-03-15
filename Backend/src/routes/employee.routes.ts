import { Router } from "express";
import { getDashboardInfo, getKardexData } from "../controllers/employee/main.controller";
import authMiddleware from "../utils/helpers/authMiddleware";

import courseRouter from "./employee/course.routes";

const router = Router();

router.get("/dashboard", authMiddleware("employee"), (req, res) => {
    getDashboardInfo(req, res);
});

router.get("/kardex", authMiddleware("employee"), (req, res) => {
    getKardexData(req, res);
});

router.use("/modules", courseRouter);

export default router;
