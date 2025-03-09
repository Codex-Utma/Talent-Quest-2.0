import { Router } from "express";
import { createProject, finishProject, setProjectToEmployees } from "../../controllers/admin/project.controller";

const router = Router();

router.post("/", (req, res) => {
    createProject(req, res);
});

router.post("/setProject", (req, res) => {
    setProjectToEmployees(req, res);
});

router.patch("/finish/:projectId", (req, res) => {
    finishProject(req, res);
});

export default router;
