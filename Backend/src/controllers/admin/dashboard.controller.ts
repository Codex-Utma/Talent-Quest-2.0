import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

import returnResponse from "../../utils/auto/httpResponse";

const prisma = new PrismaClient();

const getDashboardAdmin = async (req: Request, res: Response) => {
    try {
        const totalWorkers = await prisma.user.count({
            where: {
                UserType: {
                    name: "Employee"
                }
            }
        });

        const totalCourses = await prisma.progress.count();

        const totalCoursesFinished = await prisma.progress.count({
            where: {
                isFinished: true
            }
        });

        const totalCoursesInProgress = await prisma.progress.count({
            where: {
                percentage: {
                    gt: 0,
                    lt: 100
                }
            }
        });

        const totalCoursesNotStarted = await prisma.progress.count({
            where: {
                percentage: 0
            }
        });

        const percentageCoursesFinished = ((totalCoursesFinished / totalCourses) * 100).toFixed(1);

        const chartData = {
            totalCoursesFinished,
            totalCoursesInProgress,
            totalCoursesNotStarted
        }

        const availableEmployees = await prisma.user.findMany({
            where: {
                AND: [
                    {
                        projectId: null
                    },
                    {
                        UserType: {
                            name: "Employee"
                        }
                    }
                ]
            },
            select: {
                id: true,
                name: true,
                lastName: true,
                Department: {
                    select: {
                        name: true
                    }
                },
                updatedAt: true
            }
        });

        const response = {
            totalWorkers,
            totalCourses,
            percentageCoursesFinished,
            chartData,
            availableEmployees
        }

        return returnResponse(res, 200, "Datos obtenidos correctamente", response)
    } catch {
        return returnResponse(res, 500, "Error interno del servidor");
    }
}

const getKardexData = async (req: Request, res: Response) => {
    try {
        const { employeeId } = req.params;

        if(!employeeId) {
            return returnResponse(res, 400, "Falta el id del empleado");
        }

        const currentUser = await prisma.user.findUnique({
            where: {
                id: employeeId
            },
            select: {
                id: true,
                name: true,
                lastName: true,
                email: true,
                UserType: {
                    select: {
                        name: true
                    }
                },
                Department: {
                    select: {
                        name: true
                    }
                }
            }
        });

        if(!currentUser) {
            return returnResponse(res, 404, "Empleado no encontrado");
        }

        const insignias = await prisma.userInsignia.findMany({
            where: {
                userId: currentUser.id
            },
            select: {
                Insignia: {
                    select: {
                        id: true,
                        name: true
                    }
                }
            }
        });

        const projects = await prisma.projectAssigned.findMany({
            where: {
                AND: [
                    {
                        userId: currentUser.id
                    },
                    {
                        Project: {
                            isFinished: true
                        }
                    }
                ]
            },
            select: {
                Project: {
                    select: {
                        id: true,
                        name: true
                    }
                }
            }
        });

        const certifications = await prisma.certificationUser.findMany({
            where: {
                userId: currentUser.id
            },
            select: {
                Certification: {
                    select: {
                        id: true,
                        name: true,
                        description: true,
                        createdAt: true
                    }
                }
            }
        });

        const response = {
            insignias,
            projects,
            certifications,
            currentUser
        }

        return returnResponse(res, 200, "Información del kardex", response);
    } catch {
        return returnResponse(res, 500, "Error interno del servidor");
    }
};

export {
    getDashboardAdmin,
    getKardexData
}
