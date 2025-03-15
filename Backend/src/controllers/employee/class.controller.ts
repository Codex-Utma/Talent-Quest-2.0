import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

import returnResponse from "../../utils/auto/httpResponse";

const prisma = new PrismaClient();

const addClassCompleted = async (req: Request, res: Response) => {
    try {
        const { courseId, classId } = req.body;
        const userId = req.body.user.id;

        if (!courseId || !classId) {
            return returnResponse(res, 400, "Todos los campos son requeridos");
        }

        const currentCourse = await prisma.course.findUnique({
            where: {
                id: Number(courseId)
            }
        });

        if (!currentCourse) {
            return returnResponse(res, 404, "Curso no encontrado");
        }

        const currentClass = await prisma.class.findUnique({
            where: {
                id: Number(classId)
            }
        });

        if (!currentClass) {
            return returnResponse(res, 404, "Clase no encontrada");
        }

        const isClassCompleted = await prisma.classCompleted.findFirst({
            where: {
                AND: [
                    {
                        userId: userId
                    },
                    {
                        classId: Number(classId)
                    }
                ]
            }
        });

        if (isClassCompleted) {
            return returnResponse(res, 409, "Clase ya completada");
        }

        await prisma.classCompleted.create({
            data: {
                classId: Number(classId),
                userId: userId
            }
        });

        const classesCompleted = await prisma.classCompleted.count({
            where: {
                AND: [
                    {
                        userId: userId,
                    },
                    {
                        Class: {
                            Module: {
                                courseId: Number(courseId)
                            }
                        }
                    }
                ]
            }
        });

        const totalClasses = await prisma.course.findFirst({
            where: {
                id: Number(courseId)
            },
            select: {
                amountClasses: true
            }
        });

        if(!totalClasses) {
            return returnResponse(res, 404, "Curso no encontrado");
        }

        const progressUser = await prisma.progress.findFirst({
            where: {
                AND: [
                    {
                        userId: userId
                    },
                    {
                        courseId: Number(courseId)
                    }
                ]
            },
            select: {
                id: true
            }
        });

        if(!progressUser) {
            return returnResponse(res, 404, "Progreso no encontrado");
        }

        const percentage = (classesCompleted * 100) / totalClasses.amountClasses;

        await prisma.progress.update({
            where: {
                id: progressUser.id
            },
            data: {
                percentage: percentage
            }
        });

        return returnResponse(res, 200, "Clase completada");
    } catch {
        return returnResponse(res, 500, "Error interno del servidor");
    }
}

export {
    addClassCompleted
}
