import { Router } from "express";
import { createCourse, getAllCourses } from "../../controllers/admin/course.controller";

const router = Router();

router.post("/", (req, res) => {
    createCourse(req, res);
});

router.get("/", (req, res) => {
    getAllCourses(req, res);
});

export default router;
