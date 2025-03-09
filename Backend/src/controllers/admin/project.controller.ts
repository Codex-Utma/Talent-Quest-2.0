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

const setProjectToEmployees = async (req: Request, res: Response) => {
    try {
        const { projectId, employees } = req.body;

        if (!projectId || !employees) {
            return returnResponse(res, 400, "Faltan campos por completar");
        }

        const project = await prisma.project.findUnique({
            where: {
                id: projectId
            }
        });

        if (!project) {
            return returnResponse(res, 404, "El proyecto no existe");
        }

        const employeesData = await prisma.user.findMany({
            where: {
                id: {
                    in: employees
                }
            },
            select: {
                id: true
            }
        });

        if (employeesData.length !== employees.length) {
            return returnResponse(res, 404, "Uno o más empleados no existen");
        }

        await prisma.user.updateMany({
            where: {
                id: {
                    in: employees
                }
            },
            data: {
                projectId
            }
        });

        await Promise.all(employeesData.map(async (employee) => {
            await prisma.projectAssigned.create({
                data: {
                    projectId,
                    userId: employee.id
                }
            });
        }));

        return returnResponse(res, 200, "Proyecto asignado a los empleados correctamente");
    } catch (error) {
        return returnResponse(res, 500, "Error interno del servidor");
    }
};

const finishProject = async (req: Request, res: Response) => {
    try {
        const projectId: number = parseInt(req.params.projectId);

        if (!projectId) {
            return returnResponse(res, 400, "Faltan campos por completar");
        }

        const project = await prisma.project.findUnique({
            where: {
                id: projectId
            }
        });

        if (!project) {
            return returnResponse(res, 404, "El proyecto no existe");
        }

        await prisma.project.update({
            where: {
                id: projectId
            },
            data: {
                isFinished: true
            }
        });

        await prisma.user.updateMany({
            where: {
                projectId
            },
            data: {
                projectId: null
            }
        });

        return returnResponse(res, 200, "Proyecto finalizado");
    } catch {
        return returnResponse(res, 500, "Error interno del servidor");
    }
};

export {
    createProject,
    setProjectToEmployees,
    finishProject
}
