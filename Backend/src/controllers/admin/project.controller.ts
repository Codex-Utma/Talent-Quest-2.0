import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

import returnResponse from "../../utils/auto/httpResponse";

const prisma = new PrismaClient();

const createProject = async (req: Request, res: Response) => {
    try {
        const { name, description } = req.body;
        const neededCourses: number[] = req.body.neededCourses;

        if (!name || !description || !neededCourses) {
            return returnResponse(res, 400, "Faltan campos por completar");
        }

        const courses = await prisma.course.findMany({
            where: {
                id: {
                    in: neededCourses
                }
            },
            select: {
                id: true
            }
        });

        if (courses.length !== neededCourses.length) {
            return returnResponse(res, 404, "Uno o más cursos no existen");
        }

        const project = await prisma.project.create({
            data: {
                name,
                description
            }
        });

        await prisma.coursesNeeded.createMany({
            data: courses.map(course => {
                return {
                    courseId: course.id,
                    projectId: project.id
                }
            })
        });

        return returnResponse(res, 201, "Proyecto creado", project);
    } catch {
        return returnResponse(res, 500, "Error interno del servidor");
    }
};

export {
    createProject
}
