import { Router } from "express";
import { createProject } from "../../controllers/admin/project.controller";

const router = Router();

router.post("/", (req, res) => {
    createProject(req, res);
});

export default router;
