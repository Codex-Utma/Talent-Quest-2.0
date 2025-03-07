import { Router } from "express";

import formRouter from "./admin/forms.routes";
import projectRouter from "./admin/project.routes";

const router = Router();

router.use("/form", formRouter);
router.use("/project", projectRouter);

export default router;
