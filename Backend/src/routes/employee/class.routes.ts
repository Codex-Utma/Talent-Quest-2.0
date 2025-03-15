import { Router } from "express";
import { getClasses } from "../../controllers/employee/module.controller";

const router = Router();

router.get("/:moduleId", (req, res) => {
    getClasses(req, res);
});

export default router;
