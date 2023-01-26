import {Router,Request,Response,NextFunction, request } from 'express'
import { restaurnatsDetails } from '../database/Restaurant';
import { MANAGER_MESSAGE } from './manager.contants';

import managerService from './manager.service'
const router = Router()

router.get("/:restaurantName",
    (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = managerService.getOneRestaurant(req.params.restaurantName);
        const restaurnatName=result["restaurantName"]
        const restaurantFinder=restaurnatsDetails.find(u=>u.restaurantName===restaurnatName)
        for(let rating of restaurnatsDetails ){
            console.log(rating.ratings)
        }
        if(restaurantFinder) {
            // console.log(restaurantFinder)
            res.send({restaurantFinder,message:MANAGER_MESSAGE.MANAGER_FOUND})
        }
       
    } catch (e) {
        next(e);
    }
})


export default router