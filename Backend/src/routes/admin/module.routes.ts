import { Router } from "express";
import { createModule, getModules } from "../../controllers/admin/module.controller";

const router = Router();

router.post("/", (req, res) => {
    createModule(req, res);
});

router.get("/:courseId", (req, res) => {
    getModules(req, res);
});

export default router;
