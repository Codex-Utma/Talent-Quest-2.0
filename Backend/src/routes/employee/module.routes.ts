import { Router } from "express";
import { getClasses } from "../../controllers/admin/class.controller";
import { addClassCompleted, getGptResponse } from "../../controllers/employee/class.controller";
import authMiddleware from "../../utils/helpers/authMiddleware";

const router = Router();

router.get("/:moduleId", (req, res) => {
    getClasses(req, res);
});

router.patch("/", authMiddleware("employee"), (req, res) => {
    addClassCompleted(req, res);
});

router.post("/ai-chat", (req, res) => {
    getGptResponse(req, res);
});

export default router;
