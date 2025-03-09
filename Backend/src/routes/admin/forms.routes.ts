import { Router } from "express";
import { getAvailableEmployeesByName, getCoursesByName, getProjectsByName, getRegisterFormData } from "../../controllers/admin/forms.controller";

const router = Router();

router.get("/register", (req, res) => {
    getRegisterFormData(req, res)
});

router.get("/projects", (req, res) => {
    getProjectsByName(req, res);
});

router.get("/employees", (req, res) => {
    getAvailableEmployeesByName(req, res);
});

router.get("/courses", (req, res) => {
    getCoursesByName(req, res);
});

export default router;
