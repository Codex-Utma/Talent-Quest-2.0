import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

import returnResponse from "../../utils/auto/httpResponse";

import { UploadedFile } from "express-fileupload";

const prisma = new PrismaClient();

const createResourceFile = async (req: Request, res: Response) => {
    try {

        const { name, description, classId, moduleId, courseId } = req.body;

        if(!name || !description || !classId || !moduleId || !courseId) {
            return returnResponse(res, 400, "Faltan campos por llenar");
        }

        if(req.files === null || req.files === undefined) {
            return returnResponse(res, 400, "No se ha enviado ningún archivo");
        }

        const file = req.files.resource as UploadedFile;

        const fileName = file.name

        const fileType = file.name.split('.').pop();

        const isAllowedExtension = await prisma.resourceType.findFirst({
            where: {
                description: fileType
            },
            select: {
                id: true
            }
        });

        if(isAllowedExtension === null) {
            return returnResponse(res, 400, "Tipo de archivo no permitido");
        }

        const courseExists = await prisma.course.findFirst({
            where: {
                id: Number(courseId)
            },
            select: {
                id: true
            }
        });

        if(courseExists === null) {
            return returnResponse(res, 404, "Curso no encontrado");
        }

        const moduleExists = await prisma.module.findFirst({
            where: {
                id: Number(moduleId)
            },
            select: {
                id: true
            }
        });

        if(moduleExists === null) {
            return returnResponse(res, 404, "Módulo no encontrado");
        }

        const classExists = await prisma.class.findFirst({
            where: {
                id: Number(classId)
            },
            select: {
                id: true
            }
        });

        if(classExists === null) {
            return returnResponse(res, 404, "Clase no encontrada");
        }

        await file.mv(__dirname + '/../../../uploads/' + courseId + '/' + moduleId + '/' + classId + '/' + fileName)

        await prisma.resource.create({
            data: {
                name,
                description,
                url: './uploads/' + courseId + '/' + moduleId + '/' + classId + '/' + fileName,
                classId: Number(classId),
                resourceTypeId: isAllowedExtension.id,
            }
        });

        return returnResponse(res, 200, "Archivo subido correctamente");
    } catch {
        return returnResponse(res, 500, "Error interno del servidor");
    }
};

const createResourceLink = async (req: Request, res: Response) => {
    try {

        const { name, description, classId, moduleId, courseId, url } = req.body;

        if(!name || !description || !classId || !moduleId || !courseId || !url) {
            return returnResponse(res, 400, "Faltan campos por llenar");
        }

        const resourceType = await prisma.resourceType.findFirst({
            where: {
                description: "url"
            },
            select: {
                id: true
            }
        });

        if(resourceType === null) {
            return returnResponse(res, 500, "Error interno del servidor");
        }

        const courseExists = await prisma.course.findFirst({
            where: {
                id: Number(courseId)
            },
            select: {
                id: true
            }
        });

        if(courseExists === null) {
            return returnResponse(res, 404, "Curso no encontrado");
        }

        const moduleExists = await prisma.module.findFirst({
            where: {
                id: Number(moduleId)
            },
            select: {
                id: true
            }
        });

        if(moduleExists === null) {
            return returnResponse(res, 404, "Módulo no encontrado");
        }

        const classExists = await prisma.class.findFirst({
            where: {
                id: Number(classId)
            },
            select: {
                id: true
            }
        });

        if(classExists === null) {
            return returnResponse(res, 404, "Clase no encontrada");
        }

        await prisma.resource.create({
            data: {
                name,
                description,
                url,
                classId: Number(classId),
                resourceTypeId: resourceType.id,
            }
        });

        return returnResponse(res, 200, "Enlace creado correctamente");
    } catch {
        return returnResponse(res, 500, "Error interno del servidor");
    }
};

const getResourcesByClass = async (req: Request, res: Response) => {
    try {
        const { classId } = req.params;

        if(!classId) {
            return returnResponse(res, 400, "El id de la clase es requerido");
        }

        const classExists = await prisma.class.findFirst({
            where: {
                id: Number(classId)
            },
            select: {
                id: true,
                name: true,
                description: true
            }
        });

        if(classExists === null) {
            return returnResponse(res, 404, "Clase no encontrada");
        }

        const resources = await prisma.resource.findMany({
            where: {
                classId: Number(classId)
            },
            select: {
                id: true,
                name: true,
                description: true,
                url: true,
                ResourceType: {
                    select: {
                        name: true,
                        description: true
                    }
                }
            }
        });

        const resourcesOrdened = resources.reduce((acc: { [key: string]: typeof resources }, resource) => {
            const key: string = resource.ResourceType.name;
            if(!acc[key]) {
                acc[key] = [];
            }
            acc[key].push(resource);
            return acc;
        }, {});

        if (resources.length === 0) {
            return returnResponse(res, 204, "No se encontraron recursos para esta clase");
        }


        const response = {
            ...classExists,
            resources: resourcesOrdened
        }

        return returnResponse(res, 200, "Recursos encontrados", response);
    } catch {
        return returnResponse(res, 500, "Error interno del servidor");
    }
};

export {
    createResourceFile,
    createResourceLink,
    getResourcesByClass
}
