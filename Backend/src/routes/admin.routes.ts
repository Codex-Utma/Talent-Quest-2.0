import { Router } from "express";
import formRouter from "./admin/forms.routes";

const router = Router();

router.use("/forms", formRouter);

export default router;
