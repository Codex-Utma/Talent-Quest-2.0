import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

import httpResponse from "../../utils/auto/httpResponse";

const prisma = new PrismaClient();

const createClass = async (req: Request, res: Response) => {
    try {
        const { name, description, moduleId, courseId } = req.body;

        if (!name || !description || !moduleId || !courseId) {
            return httpResponse(res, 400, "Todos los campos son requeridos");
        }

        const currentCourse = await prisma.course.findUnique({
            where: {
                id: Number(courseId)
            }
        });

        if (!currentCourse) {
            return httpResponse(res, 404, "Curso no encontrado");
        }

        const module = await prisma.module.findUnique({
            where: {
                id: Number(moduleId)
            }
        });

        if (!module) {
            return httpResponse(res, 404, "Módulo no encontrado");
        }

        const newClass = await prisma.class.create({
            data: {
                name,
                description,
                Module: {
                    connect: {
                        id: Number(moduleId)
                    }
                }
            }
        });

        await prisma.course.update({
            where: {
                id: Number(courseId)
            },
            data: {
                amountClasses: {
                    increment: 1
                }
            }
        });

        return httpResponse(res, 201, "Clase creada exitosamente", newClass);
    } catch {
        return httpResponse(res, 500, "Error interno del servidor");
    }
};

const getClasses = async (req: Request, res: Response) => {
    try {
        const { moduleId } = req.params;

        if (!moduleId) {
            return httpResponse(res, 400, "El ID del módulo es requerido");
        }

        const currentModule = await prisma.module.findUnique({
            where: {
                id: Number(moduleId)
            },
            select: {
                id: true,
                name: true,
                description: true
            }
        });

        if (!currentModule) {
            return httpResponse(res, 404, "Módulo no encontrado");
        }

        const classes = await prisma.class.findMany({
            where: {
                moduleId: Number(moduleId)
            },
            select: {
                id: true,
                name: true,
                description: true
            }
        });

        const response = {
            module: {
                ...currentModule,
                classes
            }
        }

        return httpResponse(res, 200, "Clases obtenidas exitosamente", response);
    } catch {
        return httpResponse(res, 500, "Error interno del servidor");
    }
};

export {
    createClass,
    getClasses
}
