import { Router } from "express";
import { createClass, getClasses } from "../../controllers/admin/class.controller";

const router = Router();

router.post("/", (req, res) => {
    createClass(req, res);
});

router.get("/:moduleId", (req, res) => {
    getClasses(req, res);
});

export default router;
