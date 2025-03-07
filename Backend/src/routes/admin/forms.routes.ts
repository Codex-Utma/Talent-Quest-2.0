import { Router } from "express";
import { getProjectsByName, getRegisterFormData } from "../../controllers/admin/forms.controller";

const router = Router();

router.get("/register", (req, res) => {
    getRegisterFormData(req, res)
});

router.get("/projects", (req, res) => {
    getProjectsByName(req, res);
});

export default router;
