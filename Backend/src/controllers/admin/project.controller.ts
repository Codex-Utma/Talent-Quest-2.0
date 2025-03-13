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

const setProjectToEmployee = async (req: Request, res: Response) => {
    try {
        const { projectId, employeeId } = req.body;

        if (!projectId || !employeeId) {
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

        const requiredCourses = await prisma.coursesNeeded.findMany({
            where: {
                projectId
            },
            select: {
                courseId: true
            }
        });

        const employeeData = await prisma.user.findUnique({
            where: {
                id: employeeId
            },
            select: {
                id: true
            }
        });

        if (!employeeData) {
            return returnResponse(res, 404, "El empleado no existe");
        }

        const employeeCourses = await prisma.progress.findMany({
            where: {
                AND: [
                    {
                        userId: employeeId
                    },
                    {
                        isFinished: true
                    }
                ]
            },
            select: {
                courseId: true
            }
        });

        const missingCourses = requiredCourses.filter(course => {
            return !employeeCourses.find(employeeCourse => employeeCourse.courseId === course.courseId);
        });

        if (missingCourses.length > 0) {
            await prisma.progress.createMany({
                data: missingCourses.map(course => {
                    return {
                        userId: employeeId,
                        courseId: course.courseId
                    }
                })
            })
            return returnResponse(res, 200, "El empleado no ha completado los cursos necesarios y se le han asignado");
        };

        await prisma.user.update({
            where: {
                id: employeeId
            },
            data: {
                projectId
            }
        });

        await prisma.projectAssigned.create({
            data: {
                projectId,
                userId: employeeId
            }
        });

        return returnResponse(res, 200, "Proyecto asignado al empleado");
    } catch {
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

const getProjects = async (req: Request, res: Response) => {
    try {
        const projects = await prisma.project.findMany({
            select: {
                id: true,
                name: true,
                isFinished: true,
            }
        });

        if(projects.length === 0) {
            return returnResponse(res, 204, "No hay proyectos");
        }

        return returnResponse(res, 200, "Proyectos encontrados", projects);
    } catch {
        return returnResponse(res, 500, "Error interno del servidor");
    }
};

export {
    createProject,
    setProjectToEmployee,
    finishProject,
    getProjects
}
