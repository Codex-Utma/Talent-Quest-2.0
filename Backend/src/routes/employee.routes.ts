import { Router } from "express";
import { getDashboardInfo, getKardexData } from "../controllers/employee/main.controller";
import authMiddleware from "../utils/helpers/authMiddleware";

import moduleRouter from "./employee/course.routes";
import classRouter from "./employee/module.routes";
import { getFileResource, getResourcesByClass } from "../controllers/admin/resource.controller";

const router = Router();

router.get("/dashboard", authMiddleware("employee"), (req, res) => {
    getDashboardInfo(req, res);
});

router.get("/kardex", authMiddleware("employee"), (req, res) => {
    getKardexData(req, res);
});

router.use("/modules", moduleRouter);
router.use("/classes", classRouter);

router.get("/resources/:classId", (req, res) => {
    getResourcesByClass(req, res);
});

router.get("/resource/file/:resourceId", (req, res) => {
    getFileResource(req, res);
});

export default router;
