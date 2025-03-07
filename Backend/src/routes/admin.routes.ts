import { Router } from "express";

import formRouter from "./admin/forms.routes";
import projectRouter from "./admin/project.routes";
import courseRouter from "./admin/course.routes";

const router = Router();

router.use("/form", formRouter);
router.use("/project", projectRouter);
router.use("/course", courseRouter);

export default router;
