import { Router } from "express";
import { createProject, finishProject, getProjects, setProjectToEmployee } from "../../controllers/admin/project.controller";

const router = Router();

router.post("/", (req, res) => {
    createProject(req, res);
});

router.post("/setProject", (req, res) => {
    setProjectToEmployee(req, res);
});

router.patch("/finish/:projectId", (req, res) => {
    finishProject(req, res);
});

router.get("/", (req, res) => {
    getProjects(req, res);
});

export default router;
