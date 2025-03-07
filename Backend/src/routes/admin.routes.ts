import { Router } from "express";

import formRouter from "./admin/forms.routes";
import projectRouter from "./admin/project.routes";
import courseRouter from "./admin/course.routes";
import moduleRouter from "./admin/module.routes";

const router = Router();

router.use("/form", formRouter);
router.use("/project", projectRouter);
router.use("/course", courseRouter);
router.use("/module", moduleRouter);

export default router;
