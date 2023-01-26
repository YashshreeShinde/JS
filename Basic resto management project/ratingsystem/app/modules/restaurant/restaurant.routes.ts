import {Router} from 'express'
import { restaurnatsDetails } from '../database/Restaurant'
import { Response as ResponseHandler } from '../utility/response-handler'
import { RESTAURANT_MESSAGE } from './restaurant.constants'
import { v4 } from 'uuid'
const router=Router()

router.post('/rate',(req,res,next)=>{
  const {restaurantName,username,food,ambience, service,cleanliness,overAll}=req.body
  
  const resName=restaurnatsDetails.find(u=>u.restaurantName===restaurantName)
  const resIndex=restaurnatsDetails.findIndex(u=>u.restaurantName===restaurantName)
  // console.log(resIndex)
  if(resName){
    let ratingArray: any[]=[]
    ratingArray.push(food,ambience, service,cleanliness,overAll)
    // console.log(ratingArray)
    const average=ratingArray.reduce((a,b)=>a+b)
    const averageRating=average/5
   const detail= restaurnatsDetails[resIndex].ratings.push({userId:v4(),username,food,ambience, service,cleanliness,overAll,averageRating})
   return  res.send(new ResponseHandler({message:RESTAURANT_MESSAGE.SUCCESSFULLY_ADDED}) )
    // res.send(new ResponseHandler())
  }
  next(RESTAURANT_MESSAGE.FAILED_TO_ADD)
})

router.get('/',(req,res,next)=>{
  res.send({restaurnatsDetails})
})



export default router