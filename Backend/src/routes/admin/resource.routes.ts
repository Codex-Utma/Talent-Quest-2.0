import { Router } from "express";
import { createResourceFile } from "../../controllers/admin/resource.controller";

const router = Router();

router.post("/file", (req, res) => {
    createResourceFile(req, res);
});

router.post("/link", (req, res) => {
    // createResourceLink(req, res);
});

router.get("/file/:classId", (req, res) => {
    // getResourcesFile(req, res);
});

router.get("/link/:classId", (req, res) => {
    // getResourcesLink(req, res);
});

export default router;
