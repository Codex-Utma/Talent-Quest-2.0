import { Router } from "express";
import { createResourceFile, createResourceLink, getFileResource, getResourcesByClass } from "../../controllers/admin/resource.controller";

const router = Router();

router.post("/file", (req, res) => {
    createResourceFile(req, res);
});

router.post("/link", (req, res) => {
    createResourceLink(req, res);
});

router.get("/all/:classId", (req, res) => {
    getResourcesByClass(req, res);
});

router.get("/file/:resourceId", (req, res) => {
    getFileResource(req, res);
});

export default router;
