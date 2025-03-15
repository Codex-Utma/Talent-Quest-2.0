import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

import returnResponse from "../../utils/auto/httpResponse";

const prisma = new PrismaClient();

const getModules = async (req: Request, res: Response) => {
    try {
        const { courseId } = req.params;

        if (!courseId) {
            return returnResponse(res, 400, "El ID del curso es requerido");
        }

        const currentCourse = await prisma.course.findUnique({
            where: {
                id: Number(courseId)
            },
            select: {
                id: true,
                name: true,
                description: true
            }
        });

        if (!currentCourse) {
            return returnResponse(res, 404, "Curso no encontrado");
        }

        const modules = await prisma.module.findMany({
            where: {
                courseId: Number(currentCourse.id)
            },
            select: {
                id: true,
                name: true,
                description: true
            }
        });

        if (modules.length === 0) {
            return returnResponse(res, 204, "No hay módulos en este curso");
        }

        const response = {
            course: {
                ...currentCourse,
                modules
            }
        }

        return returnResponse(res, 200, "Módulos obtenidos exitosamente", response);
    } catch {
        return returnResponse(res, 500, "Error interno del servidor");
    }
};

export {
    getModules
}
