import { Router } from "express";
import { getModules } from "../../controllers/admin/module.controller";

const router = Router();

router.get("/:courseId", (req, res) => {
    getModules
});

export default router;
