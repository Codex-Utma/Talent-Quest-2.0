import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

import returnResponse from "../../utils/auto/httpResponse";

const prisma = new PrismaClient();

const createCourse = async (req: Request, res: Response) => {
    try {
        const { name, description } = req.body;

        if (!name || !description) {
            return returnResponse(res, 400, "Todos los campos son requeridos");
        }

        const course = await prisma.course.create({
            data: {
                name,
                description,
                amountClasses: 0
            }
        });

        return returnResponse(res, 201, "Curso creado exitosamente", course);
    } catch {
        return returnResponse(res, 500, "Error interno del servidor");
    }
};

const getAllCourses = async (req: Request, res: Response) => {
    try {
        const courses = await prisma.course.findMany({
            select: {
                id: true,
                name: true,
                description: true,
                amountClasses: true
            }
        });

        return returnResponse(res, 200, "Cursos obtenidos exitosamente", courses);
    } catch {
        return returnResponse(res, 500, "Error interno del servidor");
    }
};

export {
    createCourse,
    getAllCourses
}
