import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

import returnResponse from "../../utils/auto/httpResponse";
import createGptPrompt from "../../utils/auto/gptPrompt";
import openai from "../../utils/helpers/openAISetup";

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

        if (percentage === 100) {
            await prisma.progress.update({
                where: {
                    id: progressUser.id
                },
                data: {
                    isFinished: true
                }
            });
        }

        return returnResponse(res, 200, "Clase completada");
    } catch {
        return returnResponse(res, 500, "Error interno del servidor");
    }
}

const getGptResponse = async (req: Request, res: Response) => {
    try {
        const { courseId, moduleId, classId, message } = req.body;

        if (!courseId || !moduleId || !classId || !message) {
            return returnResponse(res, 400, "Todos los campos son requeridos");
        }

        const currentCourse = await prisma.course.findUnique({
            where: {
                id: Number(courseId)
            },
            select: {
                name: true
            }
        });

        if (!currentCourse) {
            return returnResponse(res, 404, "Curso no encontrado");
        }

        const currentModule = await prisma.module.findUnique({
            where: {
                id: Number(moduleId)
            },
            select: {
                name: true
            }
        });

        if (!currentModule) {
            return returnResponse(res, 404, "Módulo no encontrado");
        }

        const currentClass = await prisma.class.findUnique({
            where: {
                id: Number(classId)
            },
            select: {
                name: true
            }
        });

        if (!currentClass) {
            return returnResponse(res, 404, "Clase no encontrada");
        }

        const prompt = createGptPrompt(currentCourse.name, currentModule.name, currentClass.name, message);

        let gptResponse;

        try {
            gptResponse = await openai.chat.completions.create({
                model: "gpt-3.5-turbo-0125",
                messages: [{ role: "user", content: prompt }],
                max_tokens: 250,
            });
        } catch (error: any) {
            console.log(error);
            return returnResponse(res, error.status, error.message);
        }

        const response = gptResponse.choices[0].message.content;

        return returnResponse(res, 200, "Respuesta generada", response);
    } catch {
        return returnResponse(res, 500, "Error interno del servidor");
    }
};

export {
    addClassCompleted,
    getGptResponse
}
