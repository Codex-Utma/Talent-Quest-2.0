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
    } catch (error) {
        console.log(error);
        return returnResponse(res, 500, "Error interno del servidor");
    }
};

export {
    createResourceFile
}
