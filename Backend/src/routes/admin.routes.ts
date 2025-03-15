import { Router } from "express";

import formRouter from "./admin/forms.routes";
import projectRouter from "./admin/project.routes";
import courseRouter from "./admin/course.routes";
import moduleRouter from "./admin/module.routes";
import classRouter from "./admin/class.routes";
import resourceRouter from "./admin/resource.routes";
import { getDashboardAdmin } from "../controllers/admin/dashboard.controller";

const router = Router();

router.use("/form", formRouter);
router.use("/project", projectRouter);
router.use("/course", courseRouter);
router.use("/module", moduleRouter);
router.use("/class", classRouter);
router.use("/resource", resourceRouter);

router.get("/", (req, res) => {
    getDashboardAdmin(req, res);
});

export default router;
