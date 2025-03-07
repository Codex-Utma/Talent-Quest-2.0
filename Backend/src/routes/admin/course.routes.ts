import { Router } from "express";
import { createCourse } from "../../controllers/admin/course.controller";

const router = Router();

router.post("/", (req, res) => {
    createCourse(req, res);
});

export default router;
