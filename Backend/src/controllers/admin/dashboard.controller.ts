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

        const totalCourses = await prisma.course.count();

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

        const percentageCoursesFinished = (totalCoursesFinished / totalCourses) * 100;

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

export {
    getDashboardAdmin
}
