import { Router } from "express";
import { getRegisterFormData } from "../../controllers/admin/forms.controller";

const router = Router();

router.get("/register", (req, res) => {
    getRegisterFormData(req, res)
});

export default router;
