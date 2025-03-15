import { Router } from "express";
import { getDashboardInfo, getKardexData } from "../controllers/employee/main.controller";
import authMiddleware from "../utils/helpers/authMiddleware";

import moduleRouter from "./employee/course.routes";
import classRouter from "./employee/class.routes";

const router = Router();

router.get("/dashboard", authMiddleware("employee"), (req, res) => {
    getDashboardInfo(req, res);
});

router.get("/kardex", authMiddleware("employee"), (req, res) => {
    getKardexData(req, res);
});

router.use("/modules", moduleRouter);
router.use("/classes", classRouter);

export default router;
