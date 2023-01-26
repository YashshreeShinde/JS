import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
export type RouteData = {
    url: string;
    method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE"
}
export const authorize = (excludedRoutes: RouteData[]) => {
    return (req: Request, res: Response, next: NextFunction) => {
        try {
            if(excludedRoutes.find(e => e.url === req.url && e.method === req.method)) {
                return next();
            }
            const token = req.headers.authorization;
            const { JWT_SECRET_KEY } = process.env;
            const user = verify(token || '', JWT_SECRET_KEY || '');
            console.log(user)
            next();
        } catch (e) {
            next(e);
        }
    }
}

