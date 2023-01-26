
import { AuthRouter } from '../login/login.routes'
import { Routes,Route } from './routes.type'
import { RouteData } from '../utility/authorization'
import RestaurantRouter from '../restaurant/restaurant.routes'
import ManagerRouter from '../manager/manager.routes'
export const routes: Routes =[
    new Route('/auth',AuthRouter),
    new Route('/restaurant',RestaurantRouter),
    new Route('/manager',ManagerRouter),

]

export const excludedRoutes: RouteData[] = [
    { url: "/auth/login", method: "POST" },
    {url:"/restaurant/rate",method: "POST" },
    { url: "/auth/getAll", method: "GET" }
    
]