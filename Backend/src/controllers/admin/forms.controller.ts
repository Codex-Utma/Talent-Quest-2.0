import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import returnResponse from "../../utils/auto/httpResponse";

const prisma = new PrismaClient();

const getRegisterFormData = async (req: Request, res: Response) => {
    try {
        const userTypes = await prisma.userType.findMany({
            select: {
                id: true,
                name: true,
                description: true
            }
        });

        const departments = await prisma.department.findMany({
            select: {
                id: true,
                name: true,
                description: true
            }
        });

        return returnResponse(res, 200, "Datos obtenidos correctamente", { userTypes, departments });
    } catch {
        return returnResponse(res, 500, "Error interno del servidor");
    }
}

const getProjectsByName = async (req: Request, res: Response) => {
    try {
        const { name } = req.query;

        if (!name) {
            return returnResponse(res, 400, "Faltan campos por completar");
        }

        const projects = await prisma.project.findMany({
            where: {
                name: {
                    contains: name.toString()
                }
            },
            select: {
                id: true,
                name: true
            }
        });

        if (projects.length === 0) {
            return returnResponse(res, 204, "No se encontraron proyectos");
        }

        return returnResponse(res, 200, "Proyectos encontrados", projects);
    } catch {
        return returnResponse(res, 500, "Error interno del servidor");
    }
};

const getCoursesByName = async (req: Request, res: Response) => {
    try {
        const name = req.query.name;

        if (!name) {
            return returnResponse(res, 400, "Faltan campos por completar");
        }

        const courses = await prisma.course.findMany({
            where: {
                name: {
                    contains: name.toString()
                }
            },
            select: {
                id: true,
                name: true
            }
        });

        if (courses.length === 0) {
            return returnResponse(res, 204, "No se encontraron cursos");
        }

        return returnResponse(res, 200, "Cursos encontrados", courses);
    } catch {
        return returnResponse(res, 500, "Error interno del servidor");
    }
};

export {
    getRegisterFormData,
    getProjectsByName,
    getCoursesByName
}
