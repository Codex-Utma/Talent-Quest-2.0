import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const authMiddleware = (userType: 'admin' | 'employee' | 'both') => async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const token = req.cookies['auth-token'];

        if (!token) {
            res.status(401).json({ message: 'No provided token' });
            return;
        }

        const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY as string;
        if(!JWT_SECRET_KEY) {
            res.status(500).json({ message: 'JWT_SECRET_KEY is not defined' });
            return;
        }

        const decoded = jwt.verify(token, JWT_SECRET_KEY) as JwtPayload;
        const userRole = decoded.userType;

        if (userType !== 'both' && userRole !== userType) {
            res.status(401).json({ message: 'Your role is not allowed for this action' });
            return;
        }

        const userId = decoded.uid;

        const user = await prisma.user.findUnique({
            where: { id: userId },
            select: {
                id: true,
                name: true,
                lastName: true,
                email: true,
                UserType: { select: { name: true } },
                Department: { select: { name: true } }
            }
        });

        if (user === null) {
            res.status(404).json({ message: 'User not found' });
            return;
        }

        const userTypeName = user.UserType.name.toLowerCase();
        if (userType !== 'both' && userTypeName !== userType) {
            res.status(401).json({ message: 'Your role is not allowed for this action' });
            return;
        }

        req.body.user = user;
        next();
    } catch (error: any) {
        if (error.name === 'TokenExpiredError') {
            res.status(401).json({ message: 'Token expired' });
            return;
        }
        if (error.name === 'JsonWebTokenError') {
            res.status(401).json({ message: 'Invalid token' });
            return;
        }
        res.status(500).json({ message: 'Internal server error' });
        return;
    }
};

export default authMiddleware;
