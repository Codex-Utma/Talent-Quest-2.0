import { Router } from "express";
import { getClasses } from "../../controllers/admin/class.controller";

const router = Router();

router.get("/:moduleId", (req, res) => {
    getClasses(req, res);
});

export default router;
