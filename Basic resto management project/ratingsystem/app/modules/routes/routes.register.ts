import { Application,json,Request,Response as EResponse,NextFunction } from "express";
import { Response } from "../utility/response-handler";
import {excludedRoutes, routes} from './routes.data'
import cors from 'cors'
import helmet from 'helmet'
import { authorize } from "../utility/authorization";
export const registerRoutes=(app: Application)=>{
    app.use(cors())
    app.use(helmet())
    app.use(json())
    
    app.use(authorize(excludedRoutes));
    for(let route of routes){
       app.use(route.path,route.router)
    }

    app.use((err: any, req: Request, res: EResponse, next: NextFunction) => {
        res.status(err.statusCode || 500).send(new Response(null, err));
    })
}

